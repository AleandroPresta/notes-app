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
import { NotesService } from '../notes.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'spartan-dialog-modify-note',
    standalone: true,
    imports: [
        CommonModule,
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
        SpartanAlertDestructiveComponent
    ],
    templateUrl: './modify-note-dialog.component.html',
    styleUrl: './modify-note-dialog.component.css'
})
export class ModifyNoteDialogComponent {
    @Input() dialogState: 'open' | 'closed' = 'closed';
    @Input() noteId: number = 0;
    note: Note = {
        title: '',
        content: '',
        user_id: 0
    };
    isNoteInvalid: boolean = false;
    errorMessage: string = 'Please fill in all fields.';
    @Output() noteModifiedSuccessfully: EventEmitter<void> = new EventEmitter<void>();

    constructor(private notesService: NotesService) {}

    openDialog(note: Note) {
        this.noteId = note.id || 0;
        this.note = {...note}; // Create a copy of the note to avoid modifying the original
        this.dialogState = 'open';
    }

    onDialogClose() {
        this.dialogState = 'closed';
        this.isNoteInvalid = false; // Reset the error state when closing the dialog
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            this.isNoteInvalid = false;

            if (this.noteId === 0) {
                console.error('Note ID is not set.');
                this.isNoteInvalid = true;
                this.errorMessage = 'Note ID is not set.';
                return;
            }

            // Update the note using the NotesService
            this.notesService.updateNote(this.noteId, this.note).subscribe({
                next: (response) => {
                    console.log('Note updated successfully:', response);
                    this.noteModifiedSuccessfully.emit();
                    this.onDialogClose();
                },
                error: (error) => {
                    console.error('Error updating note:', error);
                    this.isNoteInvalid = true;
                    this.errorMessage = 'Error updating note. Please try again.';
                }
            });
        } else {
            this.isNoteInvalid = true;
            this.errorMessage = 'Please fill in all fields.';
        }
    }
}
