import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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

    isUserDropdownOpen = false;
    isMainMenuOpen = false;

    toggleUserDropdown() {
        this.isUserDropdownOpen = !this.isUserDropdownOpen;
    }

    toggleMainMenu() {
        this.isMainMenuOpen = !this.isMainMenuOpen;
    }

    logout() {
        // Add logout logic here
        console.log('Logging out');
        localStorage.removeItem('auth_token');
        // Navigate to login/auth page
    }
}
