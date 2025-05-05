import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Collapse } from 'flowbite';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
    @Input() userEmail: string = 'name@example.com';
    @Input() userName: string = 'User Name';
    $targetEl = document.getElementById('user-dropdown');
    $triggerEl = document.getElementById('user-menu-button');

    options = {
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
    instanceOptions = {
        id: 'targetEl',
        override: true,
    };

    collapse = new Collapse(
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
