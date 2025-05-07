import { Component, Input } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
    BrnDialogContentDirective,
    BrnDialogTriggerDirective,
} from '@spartan-ng/brain/dialog';
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

@Component({
    selector: 'spartan-dialog-new-note',
    standalone: true,
    imports: [
        BrnDialogTriggerDirective,
        BrnDialogContentDirective,

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

    openDialog() {
        this.dialogState = 'open';
    }

    onDialogClose() {
        this.dialogState = 'closed';
    }
}
