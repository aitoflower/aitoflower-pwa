import { computed, Injectable, signal } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, User } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

  // Signal que mantiene el usuario actual
  private _user = signal<User | null>(null);
  user = computed(() => this._user());

  // Signal que mantiene el token JWT
  private _token = signal<string | null>(null);
  token = computed(() => this._token());

  constructor(private auth: Auth) {
    // Escucha cambios en el estado de autenticación
    auth.onAuthStateChanged(async user => {
      this._user.set(user);
      if (user) {
        const idToken = await user.getIdToken();
        this._token.set(idToken);
      } else {
        this._token.set(null);
      }
    });
  }

  // Login con Google
  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      this._user.set(result.user);
      const idToken = await result.user.getIdToken();
      this._token.set(idToken);
    } catch (err) {
      console.error('Login Google failed:', err);
      this._user.set(null);
      this._token.set(null);
    }
  }

  // Logout
  async logout() {
    await signOut(this.auth);
    this._user.set(null);
    this._token.set(null);
  }

  getLastLogin(): Date | null {
    const user = this._user();
    return user ? user.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime) : null : null;
  }
}
