import { Injectable, computed, signal } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from '@angular/fire/auth';
import { FirebaseClaims } from '../model/interfaces/firebase-claims.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // ─────────────────────────────
  // Estado base
  // ─────────────────────────────
  private readonly _user = signal<User | null>(null);
  private readonly _token = signal<string | null>(null);
  private readonly _claims = signal<FirebaseClaims | null>(null);

  // ─────────────────────────────
  // Estado expuesto (computed)
  // ─────────────────────────────
  readonly user = computed(() => this._user());
  readonly token = computed(() => this._token());
  readonly claims = computed(() => this._claims());

  readonly roles = computed<string[]>(() => {
    const claims = this._claims();
    return Array.isArray(claims?.roles) ? claims.roles : [];
  });

  readonly isAdmin = computed(() => this.roles().includes('admin'));

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged(user => {
      if (!user) {
        this.clearSession();
        return;
      }
      this.loadSession(user);
    });
  }

  // ─────────────────────────────
  // Auth
  // ─────────────────────────────
  async loginWithGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(this.auth, provider);
      await this.loadSession(user);
    } catch (err) {
      console.error('Login Google failed', err);
      this.clearSession();
    }
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this.clearSession();
  }

  // ─────────────────────────────
  // Session
  // ─────────────────────────────
  private async loadSession(user: User): Promise<void> {
    this._user.set(user);
    const tokenResult = await user.getIdTokenResult(true);
    this._token.set(tokenResult.token);
    this._claims.set(tokenResult.claims as FirebaseClaims);
  }

  private clearSession(): void {
    this._user.set(null);
    this._token.set(null);
    this._claims.set(null);
  }

  // ─────────────────────────────
  // Utils (uso imperativo)
  // ─────────────────────────────
  hasRole(role: string): boolean {
    return this.roles().includes(role);
  }
}
