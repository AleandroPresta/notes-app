import { Component, Input } from '@angular/core';
import { Note } from '../../Notes';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsisVertical } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
    HlmCardContentDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmSwitchComponent } from '@spartan-ng/ui-switch-helm';

@Component({
    selector: 'spartan-note-card',
    standalone: true,
    imports: [
        HlmButtonDirective,
        HlmCardContentDirective,
        HlmCardDirective,
        HlmCardHeaderDirective,
        HlmCardTitleDirective,
        HlmIconDirective,
        NgIcon,
    ],
    providers: [provideIcons({ lucideEllipsisVertical })],
    templateUrl: './note-card.component.html',
    styleUrl: './note-card.component.css',
})
export class NoteCardComponent {
    @Input() protected note: Note = {
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
