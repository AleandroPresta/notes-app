import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCardModule } from '@spartan-ng/ui-card-helm';

import { AuthenticationFormComponent } from './form/form.component';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'spartan-authentication',
	imports: [AuthenticationFormComponent, HlmButtonDirective, RouterOutlet],
	templateUrl: './auth.component.html',
})
export class AuthComponent { }
