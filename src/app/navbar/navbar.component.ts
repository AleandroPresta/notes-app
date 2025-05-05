import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    Collapse,
    CollapseInterface,
    CollapseOptions,
    InstanceOptions,
} from 'flowbite';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
    @Input() userEmail: string = '';
    @Input() userFirstName: string = '';
    @Input() userLastName: string = '';

    $targetEl: HTMLElement | null = document.getElementById('user-dropdown');
    $triggerEl: HTMLElement | null =
        document.getElementById('user-menu-button');

    options: CollapseOptions = {
        onCollapse: () => {
            console.log('element has been collapsed');
        },
        onExpand: () => {
            console.log('element has been expanded');
        },
        onToggle: () => {
            console.log('element has been toggled');
        },
    };
    instanceOptions: InstanceOptions = {
        id: 'targetEl',
        override: true,
    };

    collapse: CollapseInterface = new Collapse(
        this.$targetEl,
        this.$triggerEl,
        this.options,
        this.instanceOptions
    );

    constructor() {}

    logout() {
        // Add logout logic here
        console.log('Logging out');
        localStorage.removeItem('auth_token');
        // Navigate to login/auth page
    }
}
