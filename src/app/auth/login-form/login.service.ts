import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    mockUser: Record<string, string> = {
        email: 'user@notes.mock',
        password: 'Password123',
    };

    constructor() {}

    login(email: string, password: string): boolean {
        // Mock login logic (this should be replaced with actual authentication logic)
        if (
            this.mockUser['email'] === email &&
            this.mockUser['password'] === password
        ) {
            return true;
        }
        return false;
    }
}
