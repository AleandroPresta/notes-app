import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCardModule } from '@spartan-ng/ui-card-helm';

import { SigninFormComponent } from './signin-form/signin-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterOutlet } from '@angular/router';

import {
    HlmTabsComponent,
    HlmTabsContentDirective,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-helm';
import e from 'express';

@Component({
    selector: 'spartan-authentication',
    imports: [
        SigninFormComponent,
        LoginFormComponent,
        RouterOutlet,
        HlmTabsComponent,
        HlmTabsListComponent,
        HlmTabsTriggerDirective,
        HlmTabsContentDirective,
    ],
    templateUrl: './auth.component.html',
})
export class AuthComponent {
    @Output() loginSuccessful = new EventEmitter<string>();

    handleSuccessfulLoginEvent(userEmail: string) {
        this.loginSuccessful.emit(userEmail);
    }
}
