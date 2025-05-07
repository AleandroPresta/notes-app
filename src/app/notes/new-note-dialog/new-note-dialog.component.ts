import { Component, Input } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnDialogContentDirective } from '@spartan-ng/brain/dialog';
import {
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogDescriptionDirective,
    HlmDialogHeaderComponent,
    HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { FormsModule, NgForm } from '@angular/forms';
import { Note } from '../Note';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { AlertDestructiveComponent } from '../../spartan-alert-destructive/spartan-alert-destructive.component';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';

@Component({
    selector: 'spartan-dialog-new-note',
    imports: [
        BrnDialogContentDirective,
        FormsModule,
        HlmDialogComponent,
        HlmDialogContentComponent,
        HlmDialogHeaderComponent,
        HlmDialogTitleDirective,
        HlmDialogDescriptionDirective,
        HlmLabelDirective,
        HlmInputDirective,
        HlmButtonDirective,
        HlmFormFieldModule,
        AlertDestructiveComponent,
    ],
    templateUrl: './new-note-dialog.component.html',
})
export class NewNoteDialogComponent {
    @Input() dialogState: 'open' | 'closed' = 'closed';
    note: Note = { title: '', content: '' };
    isNoteInvalid: boolean = false;
    errorMessage: string = 'Please fill in all fields.';

    openDialog() {
        this.dialogState = 'open';
    }

    onDialogClose() {
        this.dialogState = 'closed';
        this.isNoteInvalid = false; // Reset the error state when closing the dialog
        this.note = { title: '', content: '' }; // Reset the note object
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            this.isNoteInvalid = false;
            console.log('Form submitted:', this.note);
            // Handle form submission logic here
            this.onDialogClose();
            this.note = { title: '', content: '' }; // Reset the note object
        } else {
            this.isNoteInvalid = true;
        }
    }
}
