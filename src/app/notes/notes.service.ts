import { HttpClient } from '@angular/common/http';
import { PLATFORM_ID, inject, Injectable } from '@angular/core';
import { catchError, map, of, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { UserInfo } from './UserInfo';
import { Note } from './Note';
import * as Sentry from '@sentry/angular';

interface AuthResponse {
    id?: number;
    first_name?: string;
    last_name?: string;
}

@Injectable({
    providedIn: 'root',
})
export class NotesService {
    private platformId = inject(PLATFORM_ID);

    constructor(private http: HttpClient) {}

    USER_API_URL = `https://x8ki-letl-twmt.n7.xano.io/api:Y6FZ87f5`;
    NOTES_API_URL = `https://x8ki-letl-twmt.n7.xano.io/api:lJojGs4r`;

    // Safe method to get auth token that works in both browser and server environments
    private getAuthToken(): string {
        if (isPlatformBrowser(this.platformId)) {
            return localStorage.getItem('auth_token') || '';
        }
        return ''; // Empty token for SSR
    }

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
                    Sentry.captureException(error, {
                        tags: {
                            operation: 'getUserInfo',
                        },
                        extra: {
                            endpoint: `${this.USER_API_URL}/auth/me`,
                        },
                    });
                    return of(null);
                })
            );
    }

    getNotesByUserId(userId: number): Observable<any[]> {
        return this.http
            .get<any[]>(`${this.NOTES_API_URL}/note?user_id=${userId}`, {
                headers: {
                    Authorization: `Bearer ${this.getAuthToken()}`,
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
                    Sentry.captureException(error, {
                        tags: {
                            operation: 'getNotesByUserId',
                        },
                        extra: {
                            userId: userId,
                            endpoint: `${this.NOTES_API_URL}/note?user_id=${userId}`,
                        },
                    });
                    return of([]); // Return an empty array on error
                })
            );
    }

    createNote(noteToSave: Note): Observable<any> {
        return this.http
            .post<any>(`${this.NOTES_API_URL}/note`, noteToSave)
            .pipe(
                map((response) => {
                    if (response) {
                        return response;
                    } else {
                        return null;
                    }
                }),
                catchError((error) => {
                    console.error('Error creating note:', error);
                    Sentry.captureException(error, {
                        tags: {
                            operation: 'createNote',
                        },
                        extra: {
                            note: noteToSave,
                            endpoint: `${this.NOTES_API_URL}/note`,
                        },
                    });
                    return of(null); // Return null on error
                })
            );
    }

    deleteNote(noteId: number): Observable<any> {
        return this.http
            .delete<any>(`${this.NOTES_API_URL}/note/${noteId}`)
            .pipe(
                map((response) => {
                    if (response) {
                        return response;
                    } else {
                        return null;
                    }
                }),
                catchError((error) => {
                    console.error('Error deleting note:', error);
                    Sentry.captureException(error, {
                        tags: {
                            operation: 'deleteNote',
                        },
                        extra: {
                            noteId: noteId,
                            endpoint: `${this.NOTES_API_URL}/note/${noteId}`,
                        },
                    });
                    return of(null); // Return null on error
                })
            );
    }

    updateNote(noteId: number, updatedNote: Note): Observable<any> {
        return this.http
            .put<any>(`${this.NOTES_API_URL}/note/${noteId}`, updatedNote)
            .pipe(
                map((response) => {
                    if (response) {
                        return response;
                    } else {
                        return null;
                    }
                }),
                catchError((error) => {
                    console.error('Error updating note:', error);
                    Sentry.captureException(error, {
                        tags: {
                            operation: 'updateNote',
                        },
                        extra: {
                            noteId: noteId,
                            updatedNote: updatedNote,
                            endpoint: `${this.NOTES_API_URL}/note/${noteId}`,
                        },
                    });
                    return of(null); // Return null on error
                })
            );
    }
}
