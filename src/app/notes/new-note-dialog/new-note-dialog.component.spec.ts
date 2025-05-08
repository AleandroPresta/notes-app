import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNoteDialogComponent } from './new-note-dialog.component';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../notes.service';
import { of } from 'rxjs';
import { Note } from '../Note';

describe('NewNoteDialogComponent', () => {
    let component: NewNoteDialogComponent;
    let fixture: ComponentFixture<NewNoteDialogComponent>;
    let mockNotesService: jasmine.SpyObj<NotesService>;

    beforeEach(async () => {
        // Create mock for localStorage
        spyOn(localStorage, 'getItem').and.returnValue('mock-token');

        // Create mock NotesService
        mockNotesService = jasmine.createSpyObj('NotesService', ['createNote']);
        mockNotesService.createNote.and.returnValue(
            of(new Note('Test Note', 'Test Content', 0))
        ); // Return mock observable

        await TestBed.configureTestingModule({
            imports: [NewNoteDialogComponent, FormsModule],
            providers: [{ provide: NotesService, useValue: mockNotesService }],
        }).compileComponents();

        fixture = TestBed.createComponent(NewNoteDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Add test for note creation functionality
    it('should call createNote when save is called', () => {
        // Setup
        component.note = { title: 'Test Note', content: 'Test Content' };

        // Call the method
        component.onSubmit({
            valid: true,
            value: {
                title: 'Test Note',
                content: 'Test Content',
            },
        } as any);

        // Assert
        expect(mockNotesService.createNote).toHaveBeenCalled();
    });
});
