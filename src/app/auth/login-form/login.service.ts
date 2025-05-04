import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

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
                    console.log(response);
                    console.log(response.authToken);
                    // Store the authToken in localStorage or a service
                    if (response && response.authToken) {
                        localStorage.setItem('auth_token', response.authToken);
                        return true;
                    }
                    return false;
                }),
                catchError(() => {
                    // Handle errors, returning false in case of failure
                    return of(false);
                })
            );
    }
}
