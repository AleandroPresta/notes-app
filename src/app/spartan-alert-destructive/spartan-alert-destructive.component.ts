import { Component, Input } from '@angular/core';
import {
    HlmAlertDescriptionDirective,
    HlmAlertDirective,
    HlmAlertIconDirective,
    HlmAlertTitleDirective,
} from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';

@Component({
    selector: 'spartan-alert-destructive',
    standalone: true,
    imports: [
        HlmAlertDirective,
        HlmAlertDescriptionDirective,
        HlmAlertIconDirective,
        HlmAlertTitleDirective,
        HlmIconDirective,
    ],
    providers: [provideIcons({ lucideTriangleAlert })],
    templateUrl: './spartan-alert-destructive.component.html',
})
export class AlertDestructiveComponent {
    @Input() errorMessage: string = 'Error!';
}
