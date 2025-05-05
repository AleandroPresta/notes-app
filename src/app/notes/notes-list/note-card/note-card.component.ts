import { Component, Input } from '@angular/core';
import { Note } from '../../Notes';

@Component({
    selector: 'spartan-note-card',
    imports: [],
    templateUrl: './note-card.component.html',
    styleUrl: './note-card.component.css',
})
export class NoteCardComponent {
    @Input() note: Note = {
        id: 0,
        title: '',
        content: '',
    };

    constructor() {
        // Create a mock note (TODO remove this in production)
        this.note = {
            id: 1,
            title: 'Sample Note',
            content:
                'This is a sample note content. This is a sample note content. This is a sample note content. This is a sample note content. This is a sample note content.',
        };
    }
}
