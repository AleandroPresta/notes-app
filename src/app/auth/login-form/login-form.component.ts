import { Component, signal, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideLoaderCircle } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmErrorDirective } from '@spartan-ng/ui-formfield-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import {
    ErrorStateMatcher,
    ShowOnDirtyErrorStateMatcher,
} from '@spartan-ng/brain/forms';
import { EmailValidator } from '../validators/EmailValidator';

@Component({
    selector: 'auth-login-form',
    imports: [
        HlmButtonDirective,
        NgIcon,
        HlmIconDirective,
        HlmInputDirective,
        FormsModule,
        HlmLabelDirective,
        HlmErrorDirective,
        ReactiveFormsModule,
        HlmFormFieldModule,
        HlmInputDirective,
    ],
    host: {
        class: 'block',
    },
    providers: [
        provideIcons({ lucideGithub, lucideLoaderCircle }),
        {
            provide: ErrorStateMatcher,
            useClass: ShowOnDirtyErrorStateMatcher,
        },
    ],
    templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {
    public isLoading = signal(false);
    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            userEmail: ['', Validators.required],
            userPassword: ['', Validators.required],
        });
    }

    send() {
        if (this.loginForm.invalid) {
            // Mark all fields as touched to show errors
            Object.keys(this.loginForm.controls).forEach((field) => {
                const control = this.loginForm.get(field);
                control?.markAsTouched({ onlySelf: true });
            });
            return;
        }

        // Check if the email is valid
        const emailControl = this.loginForm.get('userEmail');
        if (!EmailValidator.isValid(emailControl?.value)) {
            emailControl?.setErrors({ invalidEmail: true });
            return;
        }

        this.isLoading.set(true);

        console.log('Login as:');
        console.table({
            email: this.loginForm.get('userEmail')?.value,
            password: this.loginForm.get('userPassword')?.value,
        });

        setTimeout(() => this.isLoading.set(false), 3000);
    }

    ngOnInit(): void {}
}
