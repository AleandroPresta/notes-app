import { Component, Input } from '@angular/core';
import { Note } from '../../Notes';

import { NgIcon, provideIcons } from '@ng-icons/core';
import {
    lucideEllipsisVertical,
    lucidePen,
    lucideTrash2,
} from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
    HlmCardContentDirective,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

import { BrnTooltipContentDirective } from '@spartan-ng/brain/tooltip';
import {
    HlmTooltipComponent,
    HlmTooltipTriggerDirective,
} from '@spartan-ng/ui-tooltip-helm';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import { HlmMenuComponent } from '@spartan-ng/ui-menu-helm';
import {
    HlmMenuBarComponent,
    HlmSubMenuComponent,
    HlmMenuItemDirective,
    HlmMenuItemSubIndicatorComponent,
    HlmMenuLabelComponent,
    HlmMenuShortcutComponent,
    HlmMenuSeparatorComponent,
    HlmMenuItemIconDirective,
    HlmMenuBarItemDirective,
    HlmMenuItemCheckComponent,
    HlmMenuItemRadioComponent,
    HlmMenuGroupComponent,
    HlmMenuItemCheckboxDirective,
    HlmMenuItemRadioDirective,
} from '@spartan-ng/ui-menu-helm';

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
        BrnMenuTriggerDirective,

        HlmMenuComponent,
        HlmMenuBarComponent,
        HlmMenuItemDirective,
        HlmMenuBarItemDirective,
    ],
    providers: [
        provideIcons({ lucideEllipsisVertical, lucideTrash2, lucidePen }),
    ],
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

    modifyNote() {
        // Logic to modify the note
        console.log('Modify note:', this.note);
    }
    deleteNote() {
        // Logic to delete the note
        console.log('Delete note:', this.note);
    }
}
