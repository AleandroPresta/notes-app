import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnDialogContentDirective } from '@spartan-ng/brain/dialog';
import {
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogFooterComponent,
    HlmDialogHeaderComponent,
    HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';
import { FormsModule } from '@angular/forms';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { NotesService } from '../notes.service';

@Component({
    selector: 'spartan-dialog-delete-note',
    imports: [
        BrnDialogContentDirective,
        FormsModule,
        HlmDialogComponent,
        HlmDialogContentComponent,
        HlmDialogHeaderComponent,
        HlmDialogTitleDirective,
        HlmButtonDirective,
        HlmFormFieldModule,
        HlmDialogFooterComponent,
    ],
    templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
    @Input() dialogState: 'open' | 'closed' = 'closed';
    @Output() noteDeleted: EventEmitter<void> = new EventEmitter<void>();
    noteId: number = 0;

    constructor(private notesService: NotesService) {}

    openDialog(noteId: number) {
        this.noteId = noteId;
        this.dialogState = 'open';
    }

    onDialogClose() {
        this.dialogState = 'closed';
    }

    onConfirmDelete() {
        this.notesService.deleteNote(this.noteId).subscribe({
            next: () => {
                this.noteDeleted.emit();
            },
            error: (error) => {
                console.error('Error deleting note:', error);
            },
            complete: () => {
                this.onDialogClose();
            },
        });
    }
}
