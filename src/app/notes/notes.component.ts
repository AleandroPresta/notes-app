import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NotesService } from './notes.service';
import { NotesListComponent } from './notes-list/notes-list.component';
import { Note } from './Note';
import { NavbarComponent } from '../navbar/navbar.component';
import { NotesSkeletonComponent } from './notes-skeleton/notes-skeleton.component';
import { UserInfo } from './UserInfo';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { lucidePlus } from '@ng-icons/lucide';
import { NewNoteDialogComponent } from './new-note-dialog/new-note-dialog.component';
import { toast } from 'ngx-sonner';
import { HlmToasterComponent } from '@spartan-ng/ui-sonner-helm';

@Component({
    selector: 'spartan-notes',
    imports: [
        NotesListComponent,
        NavbarComponent,
        NotesSkeletonComponent,
        NgIcon,
        HlmButtonDirective,
        HlmIconDirective,
        NewNoteDialogComponent,
        HlmToasterComponent,
    ],
    providers: [provideIcons({ lucidePlus })],
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.css',
})
export class NotesComponent {
    @Input() userEmail: string = '';
    userFirstName: string = '';
    userLastName: string = '';
    userId: number = 0;

    notes: Note[] = [];
    isLoading: boolean = true;

    @ViewChild(NewNoteDialogComponent) newNoteDialog!: NewNoteDialogComponent;

    constructor(private notesService: NotesService) {
        const userToken: string = localStorage.getItem('auth_token') || '';

        this.isLoading = true;
        notesService.getUserInfo(userToken).subscribe({
            next: (userInfo: UserInfo | null) => {
                if (userInfo) {
                    if (userInfo === null) {
                        console.error('User info is null');
                        this.isLoading = false; // Set to false if userInfo is null
                        return;
                    }
                    // Set user first and last name
                    this.userFirstName = userInfo.getFirstName();
                    this.userLastName = userInfo.getLastName();
                    this.userId = userInfo.getId();

                    // Get notes by user ID
                    notesService.getNotesByUserId(userInfo.getId()).subscribe({
                        next: (notes) => {
                            this.notes = notes;
                            this.isLoading = false; // Only set to false when data is loaded
                        },
                        error: (error) => {
                            console.error('Error fetching notes:', error);
                            this.isLoading = false; // Still need to set false on error
                        },
                    });
                } else {
                    console.error('No user ID found');
                    this.isLoading = false; // Set to false if no user ID
                }
            },
            error: (error) => {
                console.error('Error fetching user ID:', error);
                this.isLoading = false; // Set to false on error
            },
        });
    }

    // Method to open the new note dialog
    openAddNewNoteModal() {
        this.newNoteDialog.openDialog();
    }

    // Handle the noteCreatedSuccessfully event
    onNoteCreated() {
        toast.success('Note created successfully!', {
            description: 'Your note has been created.',
            duration: 3000,
            action: {
                label: 'Close',
                onClick: () => {
                    toast.dismiss();
                },
            },
            style: {
                backgroundColor: '#1e293b',
                color: '#ffffff',
            },
        });
        // Refresh notes list when a new note is created
        this.isLoading = true;
        this.notesService.getNotesByUserId(this.userId).subscribe({
            next: (notes) => {
                this.notes = notes;
                this.isLoading = false;
            },
            error: (error) => {
                console.error('Error fetching notes:', error);
                this.isLoading = false;
            },
        });
    }
}
