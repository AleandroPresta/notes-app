import { Component, Input } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnDialogContentDirective } from '@spartan-ng/brain/dialog';
import {
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogDescriptionDirective,
    HlmDialogFooterComponent,
    HlmDialogHeaderComponent,
    HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { FormsModule, NgForm } from '@angular/forms';
import { Note } from '../Note';

@Component({
    selector: 'spartan-dialog-new-note',
    standalone: true,
    imports: [
        BrnDialogContentDirective,
        FormsModule,
        HlmDialogComponent,
        HlmDialogContentComponent,
        HlmDialogHeaderComponent,
        HlmDialogFooterComponent,
        HlmDialogTitleDirective,
        HlmDialogDescriptionDirective,

        HlmLabelDirective,
        HlmInputDirective,
        HlmButtonDirective,
    ],
    templateUrl: './new-note-dialog.component.html',
})
export class NewNoteDialogComponent {
    @Input() dialogState: 'open' | 'closed' = 'closed';
    note: Note = { title: '', content: '' };

    openDialog() {
        this.dialogState = 'open';
    }

    onDialogClose() {
        this.dialogState = 'closed';
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            console.log('Form submitted:', this.note);
            // Handle form submission logic here
            this.onDialogClose();
            this.note = { title: '', content: '' }; // Reset the note object
        }
    }
}
