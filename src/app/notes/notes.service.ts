import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, of, Observable } from 'rxjs';
import { UserInfo } from './UserInfo';

interface AuthResponse {
    id?: number;
    first_name?: string;
    last_name?: string;
}

@Injectable({
    providedIn: 'root',
})
export class NotesService {
    private http = inject(HttpClient);
    constructor() {}

    USER_API_URL = `https://x8ki-letl-twmt.n7.xano.io/api:Y6FZ87f5`;
    NOTES_API_URL = `https://x8ki-letl-twmt.n7.xano.io/api:lJojGs4r`;

    getUserInfo(userToken: string): Observable<UserInfo | null> {
        return this.http
            .get<AuthResponse>(`${this.USER_API_URL}/auth/me`, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            })
            .pipe(
                map((response) => {
                    if (
                        response.id &&
                        response.first_name &&
                        response.last_name
                    ) {
                        return new UserInfo(
                            response.id,
                            response.first_name,
                            response.last_name
                        );
                    } else {
                        return null;
                    }
                }),
                catchError((error) => {
                    console.error('Error fetching user ID:', error);
                    return of(null);
                })
            );
    }

    getNotesByUserId(userId: number): Observable<any[]> {
        return this.http
            .get<any[]>(`${this.NOTES_API_URL}/note?user_id=${userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        'auth_token'
                    )}`,
                },
            })
            .pipe(
                map((response) => {
                    if (response) {
                        return response;
                    } else {
                        return [];
                    }
                }),
                catchError((error) => {
                    console.error('Error fetching notes:', error);
                    return of([]); // Return an empty array on error
                })
            );
    }
}
