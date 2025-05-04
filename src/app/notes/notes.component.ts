import { Component, Input } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
    selector: 'spartan-notes',
    imports: [],
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.css',
})
export class NotesComponent {
    @Input() userEmail: string = 'None';
    userToken: string = '';
    userId: number = 0;

    constructor(notesService: NotesService) {
        this.userToken = localStorage.getItem('auth_token') || '';

        notesService.getUserId(this.userToken).subscribe((userId) => {
            if (userId) {
                this.userId = userId;
            } else {
                console.error('No user ID found');
            }
        });
    }
}
