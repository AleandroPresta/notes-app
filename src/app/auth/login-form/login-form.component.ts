import {
    Component,
    signal,
    OnInit,
    Output,
    EventEmitter,
    Input,
} from '@angular/core';
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
import {
    EmailValidator,
    EmptyEmailException,
    InvalidEmailException,
} from '../validators/EmailValidator';
import { NgIf } from '@angular/common';
import {
    EmptyPasswordException,
    InvalidPasswordException,
    PasswordValidator,
} from '../validators/PasswordValidator';
import { LoginService } from './login.service';

@Component({
    selector: 'auth-login-form',
    imports: [
        HlmButtonDirective,
        NgIcon,
        NgIf,
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
    @Output() loginSuccess = new EventEmitter<string>();

    constructor(private fb: FormBuilder, private loginService: LoginService) {
        this.loginForm = this.fb.group({
            userEmail: ['', Validators.required],
            userPassword: ['', Validators.required],
        });
    }

    send(): void {
        // Reset all form errors at the beginning of each submission
        this.loginForm.markAsPristine();
        this.loginForm.markAsUntouched();
        const emailControl = this.loginForm.get('userEmail');
        const passwordControl = this.loginForm.get('userPassword');

        if (emailControl) emailControl.setErrors(null);
        if (passwordControl) passwordControl.setErrors(null);

        if (this.isEmailValid() && this.isPasswordValid()) {
            this.isLoading.set(true);

            // Try to login with the service
            const email = this.loginForm.get('userEmail')?.value;
            const password = this.loginForm.get('userPassword')?.value;

            const loginResult = this.loginService.login(email, password);

            if (loginResult) {
                // If login is successful, emit success event with the email
                this.loginSuccess.emit(email);
                console.log('Login successful:', email);
            } else {
                this.loginForm?.setErrors({ invalidCredentials: true });
            }

            this.isLoading.set(false);
        }
    }

    ngOnInit(): void {}

    isEmailValid(): boolean {
        // Check if the email is valid
        const emailControl = this.loginForm.get('userEmail');
        try {
            EmailValidator.isValid(emailControl?.value);
        } catch (error) {
            if (error instanceof InvalidEmailException) {
                emailControl?.setErrors({ invalidEmail: true });
                return false;
            } else if (error instanceof EmptyEmailException) {
                emailControl?.setErrors({ required: true });
                return false;
            } else {
                emailControl?.setErrors({ genericError: true });
                return false;
            }
        }
        return true;
    }

    isPasswordValid(): boolean {
        // Check if the password is valid
        const passwordControl = this.loginForm.get('userPassword');
        try {
            PasswordValidator.isValid(passwordControl?.value);
        } catch (error) {
            if (error instanceof InvalidPasswordException) {
                passwordControl?.setErrors({ invalidPassword: true });
                return false;
            } else if (error instanceof EmptyPasswordException) {
                passwordControl?.setErrors({ required: true });
                return false;
            } else {
                passwordControl?.setErrors({ genericError: true });
                return false;
            }
        }
        return true;
    }

    loginIsSuccessful(): boolean {
        return this.loginService.login(
            this.loginForm.get('userEmail')?.value,
            this.loginForm.get('userPassword')?.value
        );
    }
}
