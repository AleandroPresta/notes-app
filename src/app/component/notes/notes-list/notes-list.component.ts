import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../../model/note.model';
import { NgFor } from '@angular/common';
import { NoteCardComponent } from './note-card/note-card.component';

@Component({
    selector: 'app-notes-list',
    imports: [NoteCardComponent],
    templateUrl: './notes-list.component.html',
    styleUrl: './notes-list.component.css',
})
export class NotesListComponent {
    @Input() notes: Note[] = [];
    @Output() openNoteDeletionDialog: EventEmitter<number> =
        new EventEmitter<number>();
    @Output() openNoteModificationDialog: EventEmitter<Note> =
        new EventEmitter<Note>();

    onOpenNoteDeletionDialog(noteId: number | undefined): void {
        if (noteId === undefined) {
            console.error('Note ID is undefined');
            return;
        }
        // Emit the note ID to the parent component
        this.openNoteDeletionDialog.emit(noteId);
    }

    onOpenNoteModificationDialog(note: Note): void {
        // Emit the note to the parent component
        this.openNoteModificationDialog.emit(note);
    }
}
