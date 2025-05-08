import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import * as Sentry from '@sentry/angular';

interface AuthResponse {
    authToken?: string;
}

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private http = inject(HttpClient);

    API_URL = `https://x8ki-letl-twmt.n7.xano.io/api:Y6FZ87f5`;

    constructor() {}

    login(email: string, password: string): Observable<boolean> {
        return this.http
            .post<AuthResponse>(`${this.API_URL}/auth/login`, {
                email: email,
                password: password,
            })
            .pipe(
                map((response) => {
                    // Store the authToken in localStorage or a service
                    if (response && response.authToken) {
                        localStorage.setItem('auth_token', response.authToken);
                        return true;
                    }
                    return false;
                }),
                catchError((error) => {
                    // Capture authentication errors with Sentry
                    console.error('Authentication error:', error);
                    Sentry.captureException(error, {
                        tags: {
                            operation: 'userLogin',
                        },
                        extra: {
                            email: email,
                            endpoint: `${this.API_URL}/auth/login`,
                        },
                    });
                    // Handle errors, returning false in case of failure
                    return of(false);
                })
            );
    }
}
