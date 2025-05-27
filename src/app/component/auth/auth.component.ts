import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SigninFormComponent } from './signin-form/signin-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterOutlet } from '@angular/router';

import {
    HlmTabsComponent,
    HlmTabsContentDirective,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-helm';

import {
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';

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
        HlmCardDirective,
    ],
    templateUrl: './auth.component.html',
})
export class AuthComponent {
    @Output() loginSuccessful = new EventEmitter<string>();

    handleSuccessfulLoginEvent(userEmail: string) {
        this.loginSuccessful.emit(userEmail);
    }
}
