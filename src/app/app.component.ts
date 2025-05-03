import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { NgIf } from '@angular/common';
import { LoginService } from './auth/login-form/login.service';

@Component({
    selector: 'app-root',
    imports: [AuthComponent, NgIf],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'notes-app';

    componentToShow = 'auth';
    loginFailed: boolean = false;

    constructor(private loginService: LoginService) {}

    handleUserAuthentication(userData: { email: string; password: string }) {
        // Manage login success or failure
        this.loginService.login(userData.email, userData.password)
            ? (this.componentToShow = 'notes')
            : ((this.loginFailed = true), console.log('Login failed in app'));
    }
}
