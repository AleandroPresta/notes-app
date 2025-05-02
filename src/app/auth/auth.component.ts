import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCardModule } from '@spartan-ng/ui-card-helm';

import { SigninFormComponent } from './signin-form/signin-form.component';
import { RouterOutlet } from '@angular/router';

import {
    HlmTabsComponent,
    HlmTabsContentDirective,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-helm';

@Component({
	selector: 'spartan-authentication',
	imports: [
		SigninFormComponent, 
		HlmButtonDirective, 
		RouterOutlet,
		HlmTabsComponent,
        HlmTabsListComponent,
        HlmTabsTriggerDirective,
        HlmTabsContentDirective,
	],
	templateUrl: './auth.component.html',
})
export class AuthComponent { }
