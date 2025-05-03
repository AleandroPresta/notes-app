import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [AuthComponent, NgIf],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'notes-app';

    componentToShow = 'auth';
}
