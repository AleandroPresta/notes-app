import { Component, Input } from '@angular/core';

@Component({
    selector: 'spartan-notes',
    imports: [],
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.css',
})
export class NotesComponent {
    @Input() userEmail: string = 'None';
}
