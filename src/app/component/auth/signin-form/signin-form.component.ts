import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideLoaderCircle } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { toast } from 'ngx-sonner';
import { HlmToasterComponent } from '@spartan-ng/ui-sonner-helm';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';

@Component({
    selector: 'auth-signin-form',
    imports: [
        HlmButtonDirective,
        NgIcon,
        HlmIconDirective,
        HlmInputDirective,
        FormsModule,
        HlmLabelDirective,
        HlmToasterComponent,
        HlmFormFieldModule,
    ],
    host: {
        class: 'block',
    },
    providers: [provideIcons({ lucideGithub, lucideLoaderCircle })],
    templateUrl: './signin-form.component.html',
})
export class SigninFormComponent {
    public isLoading = signal(false);

    send() {
        this.isLoading.set(true);
        setTimeout(() => this.isLoading.set(false), 3000);
    }

    showToast(messageHeader: string, messageBody: string) {
        toast(messageHeader, {
            description: messageBody,
            duration: 3000,
            action: {
                label: 'Close',
                onClick: () => {
                    toast.dismiss();
                },
            },
            style: {
                backgroundColor: '#1e293b',
                color: '#ffffff',
            },
        });
    }
}
