import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, of, Observable } from 'rxjs';
import { UserInfo } from '../model/userinfo.model';
import { Note } from '../model/note.model';

interface AuthResponse {
    id?: number;
    first_name?: string;
    last_name?: string;
    profile_image_url?: string;
}

@Injectable({
    providedIn: 'root',
})
export class NotesService {
    constructor(private http: HttpClient) {}

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
                        response.last_name &&
                        response.profile_image_url
                    ) {
                        return new UserInfo(
                            response.id,
                            response.first_name,
                            response.last_name,
                            response.profile_image_url
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
                    return of(null); // Return null on error
                })
            );
    }
}
