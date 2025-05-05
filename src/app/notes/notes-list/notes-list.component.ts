import { Component, Input } from '@angular/core';
import { Note } from '../Notes';
import { NgFor } from '@angular/common';
import { NoteCardComponent } from './note-card/note-card.component';

@Component({
    selector: 'app-notes-list',
    imports: [NgFor, NoteCardComponent],
    templateUrl: './notes-list.component.html',
    styleUrl: './notes-list.component.css',
})
export class NotesListComponent {
    @Input() notes: Note[] = [];
}
