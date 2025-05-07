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
import { HlmFormFieldModule } from '../../../../libs/ui/ui-formfield-helm/src/index';
import { HlmErrorDirective } from '../../../../libs/ui/ui-formfield-helm/src/lib/hlm-error.directive';
import { AlertDestructiveComponent } from '../../spartan-alert-destructive/spartan-alert-destructive.component';

@Component({
    selector: 'spartan-dialog-new-note',
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
        HlmFormFieldModule,
        HlmErrorDirective,
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

            // Mark all form controls as touched (otherwise not every field will be red)
            Object.keys(form.controls).forEach((key) => {
                const control = form.controls[key];
                control.markAsTouched();
            });
        }
    }
}
