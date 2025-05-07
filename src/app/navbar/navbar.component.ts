import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import { HlmMenuComponent } from '@spartan-ng/ui-menu-helm';
import {
    HlmMenuBarComponent,
    HlmMenuItemDirective,
    HlmMenuBarItemDirective,
} from '@spartan-ng/ui-menu-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmMenuSeparatorComponent } from '../../../libs/ui/ui-menu-helm/src/lib/hlm-menu-separator.component';
import { lucideCircleUserRound, lucidePlus } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        CommonModule,
        BrnMenuTriggerDirective,
        HlmMenuComponent,
        HlmMenuBarComponent,
        HlmMenuItemDirective,
        HlmMenuBarItemDirective,
        NgIcon,
        HlmMenuSeparatorComponent,
        HlmButtonDirective,
        HlmIconDirective,
    ],
    providers: [provideIcons({ lucideCircleUserRound, lucidePlus })],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
    @Input() userEmail: string = '';
    @Input() userFirstName: string = '';
    @Input() userLastName: string = '';

    constructor() {}

    logout() {
        // Add logout logic here
        console.log('Logging out');
        // localStorage.removeItem('auth_token'); TODO activate in production
        // Navigate to login/auth page
    }
}
