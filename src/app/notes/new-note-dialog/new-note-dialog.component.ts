import { Component, EventEmitter, Input, Output } from '@angular/core';
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
import { SpartanAlertDestructiveComponent } from '../../spartan-alert-destructive/spartan-alert-destructive.component';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import { NotesService } from '../notes.service';

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
        SpartanAlertDestructiveComponent,
    ],
    templateUrl: './new-note-dialog.component.html',
})
export class NewNoteDialogComponent {
    @Input() dialogState: 'open' | 'closed' = 'closed';
    @Input() userId: number = 0;
    note: Note = new Note('', '', 0);
    isNoteInvalid: boolean = false;
    errorMessage: string = 'Please fill in all fields.';
    @Output() noteCreatedSuccessfully: EventEmitter<void> =
        new EventEmitter<void>();

    constructor(private notesService: NotesService) {}

    openDialog() {
        this.dialogState = 'open';
    }

    onDialogClose() {
        this.dialogState = 'closed';
        this.isNoteInvalid = false; // Reset the error state when closing the dialog
        this.note = { title: '', content: '', user_id: 0 }; // Reset the note object
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            this.isNoteInvalid = false;

            if (this.userId === 0) {
                console.error('User ID is not set.');
                this.isNoteInvalid = true;
                return;
            }
            // Save the note using the NotesService
            const noteToSave: Note = {
                user_id: this.userId,
                title: this.note.title,
                content: this.note.content,
            };

            console.log('Note to save:', noteToSave);

            this.notesService.createNote(noteToSave).subscribe({
                next: (response) => {
                    console.log('Note created successfully:', response);
                    this.noteCreatedSuccessfully.emit();
                },
                error: (error) => {
                    console.error('Error creating note:', error);
                    this.isNoteInvalid = true;
                },
            });
            // Handle resetting the form and closing the dialog
            this.onDialogClose();
            this.note = { title: '', content: '' }; // Reset the note object
        } else {
            this.isNoteInvalid = true;
        }
    }
}
