import { Component, Input } from '@angular/core';
import { NotesService } from './notes.service';
import { NotesListComponent } from './notes-list/notes-list.component';
import { Note } from './Notes';

@Component({
    selector: 'spartan-notes',
    imports: [NotesListComponent],
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.css',
})
export class NotesComponent {
    @Input() userEmail: string = 'None';

    notes: Note[] = [];

    constructor(notesService: NotesService) {
        const userToken: string = localStorage.getItem('auth_token') || '';

        notesService.getUserId(userToken).subscribe((userId) => {
            if (userId) {
                notesService.getNotesByUserId(userId).subscribe((notes) => {
                    this.notes = notes;
                });
            } else {
                console.error('No user ID found');
            }
        });
    }
}
