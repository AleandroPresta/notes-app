import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, of, Observable } from 'rxjs';

interface AuthResponse {
    id?: number;
}

@Injectable({
    providedIn: 'root',
})
export class NotesService {
    private http = inject(HttpClient);
    constructor() {}

    API_URL = `https://x8ki-letl-twmt.n7.xano.io/api:Y6FZ87f5`;

    getUserId(userToken: string): Observable<number> {
        return this.http
            .get<AuthResponse>(`${this.API_URL}/auth/me`, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            })
            .pipe(
                map((response) => {
                    if (response.id) {
                        return response.id;
                    } else {
                        return 0;
                    }
                }),
                catchError((error) => {
                    console.error('Error fetching user ID:', error);
                    return of(0); // Return -1 or any other default value
                })
            );
    }
}
