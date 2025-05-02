import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCardModule } from '@spartan-ng/ui-card-helm';

import { SigninFormComponent } from './signin-form/signin-form.component';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'spartan-authentication',
	imports: [SigninFormComponent, HlmButtonDirective, RouterOutlet],
	templateUrl: './auth.component.html',
})
export class AuthComponent { }
