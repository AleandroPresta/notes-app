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
        notesService.getUserId(userToken).subscribe((userId) => {
            if (userId) {
                notesService.getNotesByUserId(userId).subscribe((notes) => {
                    this.notes = notes;
                });
            } else {
                console.error('No user ID found');
            }
        });
        // this.isLoading = false;
    }
}
