import { Component } from '@angular/core';
import { HlmSkeletonComponent } from '@spartan-ng/ui-skeleton-helm';

@Component({
    selector: 'spartan-note-skeleton',
    standalone: true,
    imports: [HlmSkeletonComponent],
    templateUrl: './notes-skeleton.component.html',
    styleUrl: './notes-skeleton.component.css',
})
export class NotesSkeletonComponent {}
