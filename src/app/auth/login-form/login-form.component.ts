import {
    Component,
    signal,
    OnInit,
    Output,
    EventEmitter,
    Input,
    OnChanges,
    SimpleChanges,
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
    @Output() loginSuccessful = new EventEmitter<string>();

    constructor(private fb: FormBuilder, private loginService: LoginService) {
        this.loginForm = this.fb.group({
            userEmail: ['', Validators.required],
            userPassword: ['', Validators.required],
        });
    }

    send(): void {
        if (this.isEmailValid() && this.isPasswordValid()) {
            this.isLoading.set(true);

            if (this.loginIsSuccessful()) {
                // Emit the event with user data
                this.loginSuccessful.emit(
                    this.loginForm.get('userEmail')?.value
                );
            } else {
                // Handle login failure
                this.loginForm.setErrors({ invalidCredentials: true });
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
