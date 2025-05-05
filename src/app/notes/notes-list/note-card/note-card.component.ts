import { Component, Input } from '@angular/core';
import { Note } from '../../Notes';

import { provideIcons } from '@ng-icons/core';
import { lucideBell, lucideCheck } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
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
        HlmCardDescriptionDirective,
        HlmCardDirective,
        HlmCardFooterDirective,
        HlmCardHeaderDirective,
        HlmCardTitleDirective,
        HlmIconDirective,
        HlmSwitchComponent,
    ],
    providers: [provideIcons({ lucideCheck, lucideBell })],
    templateUrl: './note-card.component.html',
    styleUrl: './note-card.component.css',
})
export class NoteCardComponent {
    @Input() protected note: Note = {
        id: 0,
        title: '',
        content: '',
    };

    protected notifications = [
        {
            id: 1,
            title: 'Your call has been confirmed.',
            description: '1 hour ago',
        },
        {
            id: 2,
            title: 'You have a new message!',
            description: '1 hour ago',
        },
        {
            id: 3,
            title: 'Your subscription is expiring soon!',
            description: '2 hours ago',
        },
    ];

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
