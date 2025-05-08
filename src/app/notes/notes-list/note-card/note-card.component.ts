import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../Note';

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
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import { HlmMenuComponent } from '@spartan-ng/ui-menu-helm';
import {
    HlmMenuBarComponent,
    HlmMenuItemDirective,
    HlmMenuBarItemDirective,
} from '@spartan-ng/ui-menu-helm';
import { SlicePipe } from '@angular/common';

@Component({
    selector: 'spartan-note-card',
    standalone: true,
    imports: [
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
        SlicePipe,
    ],
    providers: [
        provideIcons({ lucideEllipsisVertical, lucideTrash2, lucidePen }),
    ],
    templateUrl: './note-card.component.html',
    styleUrl: './note-card.component.css',
})
export class NoteCardComponent {
    @Input() note: Note = {
        user_id: 0,
        title: '',
        content: '',
        id: 0,
    };

    @Output() openNoteDeletionDialog: EventEmitter<number> =
        new EventEmitter<number>();

    constructor() {}

    onOpenModifyNoteDialog() {
        this.openNoteDeletionDialog.emit(this.note.id);
    }

    modifyNote() {
        // Logic to delete the note
        console.log('Delete note:', this.note);
    }
}
