import { Component } from '@angular/core';

import { AuthComponent } from './component/auth/auth.component';
import { NgIf } from '@angular/common';
import { NotesComponent } from './component/notes/notes.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [AuthComponent, NgIf, NotesComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'notes-app';

    componentToShow = 'auth'; // auth in production
    userEmail = '';

    constructor() {}

    handleSuccessfulLoginEvent(userEmail: string) {
        // Manage login success
        this.componentToShow = 'notes';
        this.userEmail = userEmail;
    }
}
