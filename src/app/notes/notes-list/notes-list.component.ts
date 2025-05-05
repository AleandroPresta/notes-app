import { Component, Input } from '@angular/core';
import { Note } from '../Notes';

@Component({
    selector: 'app-notes-list',
    imports: [],
    templateUrl: './notes-list.component.html',
    styleUrl: './notes-list.component.css',
})
export class NotesListComponent {
    @Input() notes: Note[] = [];
}
