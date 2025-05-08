import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HlmDialogModule } from '../../../../libs/ui/ui-dialog-helm/src/index';
import { HlmDialogFooterComponent } from '../../../../libs/ui/ui-dialog-helm/src/lib/hlm-dialog-footer.component';

@Component({
    selector: 'app-delete-note-dialog',
    imports: [HlmDialogModule, HlmDialogFooterComponent],
    templateUrl: './delete-note-dialog.component.html',
    styleUrl: './delete-note-dialog.component.css',
})
export class DeleteNoteDialogComponent {
    @Input() dialogState: 'open' | 'closed' = 'closed';
    @Output() confirmNoteDeletion: EventEmitter<void> =
        new EventEmitter<void>();

    @Input() noteId: number = 0;

    constructor() {}

    openDialog() {
        this.dialogState = 'open';
    }

    onDialogClose() {
        this.dialogState = 'closed';
    }

    onConfirmDeletion() {
        this.confirmNoteDeletion.emit();
        this.onDialogClose();
    }
}
