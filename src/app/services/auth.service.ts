import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Mock state
    private _isLoggedIn = signal<boolean>(false); // Start as false to show the "must login" message first as requested? Or maybe true for convenience? User said "check IF logado", so let's start false or check localStorage.

    // Storing simple mock data
    private readonly LAST_LOGIN_KEY = 'aitoflower_last_login';

    constructor() {
        // Check if we have a "session" (mock)
        const lastLogin = localStorage.getItem(this.LAST_LOGIN_KEY);
        if (lastLogin) {
            // Auto login for demo if we have history? 
            // Let's keep it simple: Start false to demonstrate the "Not logged in" state, unless we want to simulate persistence.
            // User asked: "mirar a ver si el usuario esta logado".
            // Let's rely on a manual login for the demo.
        }
    }

    get isLoggedIn() {
        return this._isLoggedIn.asReadonly();
    }

    getLastLogin(): Date | null {
        const dateStr = localStorage.getItem(this.LAST_LOGIN_KEY);
        return dateStr ? new Date(dateStr) : null;
    }

    login() {
        this._isLoggedIn.set(true);
        localStorage.setItem(this.LAST_LOGIN_KEY, new Date().toISOString());
    }

    logout() {
        this._isLoggedIn.set(false);
    }
}
