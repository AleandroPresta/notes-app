import { Component } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { NgIf } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [AuthComponent, NgIf, NotesComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'notes-app';

    componentToShow = 'auth'; // Auth in production
    userEmail = 'None';

    constructor() {}

    handleSuccessfulLoginEvent(userEmail: string) {
        // Manage login success
        this.componentToShow = 'notes';
        this.userEmail = userEmail;
    }
}
