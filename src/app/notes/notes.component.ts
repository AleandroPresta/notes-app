import { Component, Input } from '@angular/core';
import { NotesService } from './notes.service';
import { NotesListComponent } from './notes-list/notes-list.component';
import { Note } from './Notes';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { NotesSkeletonComponent } from './notes-skeleton/notes-skeleton.component';

@Component({
    selector: 'spartan-notes',
    imports: [NotesListComponent, NavbarComponent, NotesSkeletonComponent],
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.css',
})
export class NotesComponent {
    @Input() userEmail: string = 'None';

    notes: Note[] = [];
    isLoading: boolean = true;

    constructor(notesService: NotesService) {
        const userToken: string = localStorage.getItem('auth_token') || '';

        this.isLoading = true;
        notesService.getUserId(userToken).subscribe({
            next: (userId) => {
                if (userId) {
                    notesService.getNotesByUserId(userId).subscribe({
                        next: (notes) => {
                            this.notes = notes;
                            this.isLoading = false; // Only set to false when data is loaded
                        },
                        error: (error) => {
                            console.error('Error fetching notes:', error);
                            this.isLoading = false; // Still need to set false on error
                        },
                    });
                } else {
                    console.error('No user ID found');
                    this.isLoading = false; // Set to false if no user ID
                }
            },
            error: (error) => {
                console.error('Error fetching user ID:', error);
                this.isLoading = false; // Set to false on error
            },
        });
        // Remove this line as it immediately sets loading to false
        // this.isLoading = false;
    }
}
