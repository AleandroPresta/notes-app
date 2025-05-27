import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { DeleteDialogComponent } from './delete-dialog.component';
import {
    HlmDialogFooterComponent,
    HlmDialogModule,
} from '@spartan-ng/ui-dialog-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { NotesService } from '../notes.service';

describe('DeleteDialogComponent', () => {
    let component: DeleteDialogComponent;
    let fixture: ComponentFixture<DeleteDialogComponent>;
    let notesServiceMock: jasmine.SpyObj<NotesService>;

    beforeEach(async () => {
        notesServiceMock = jasmine.createSpyObj('NotesService', ['deleteNote']);

        await TestBed.configureTestingModule({
            imports: [
                DeleteDialogComponent,
                HlmDialogModule,
                HlmDialogFooterComponent,
                HlmButtonDirective,
            ],
            providers: [{ provide: NotesService, useValue: notesServiceMock }],
        }).compileComponents();

        fixture = TestBed.createComponent(DeleteDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Test openDialog method
    it('should set noteId and dialogState when openDialog is called', () => {
        // Setup
        const testNoteId = 123;

        // Call the method
        component.openDialog(testNoteId);

        // Assert
        expect(component.noteId).toBe(testNoteId);
        expect(component.dialogState).toBe('open');
    });

    // Test onDialogClose method
    it('should set dialogState to closed when onDialogClose is called', () => {
        // Setup
        component.dialogState = 'open';

        // Call the method
        component.onDialogClose();

        // Assert
        expect(component.dialogState).toBe('closed');
    });

    // Test onConfirmDelete method - success case
    it('should emit noteDeleted event and close dialog when deleteNote succeeds', () => {
        // Setup
        spyOn(component.noteDeleted, 'emit');
        notesServiceMock.deleteNote.and.returnValue(of(void 0));
        component.dialogState = 'open';
        component.noteId = 123;

        // Call the method
        component.onConfirmDelete();

        // Assert
        expect(notesServiceMock.deleteNote).toHaveBeenCalledWith(123);
        expect(component.noteDeleted.emit).toHaveBeenCalled();
        expect(component.dialogState).toBe('closed');
    });

    // Test onConfirmDelete method - error case
    it('should handle errors when deleteNote fails', () => {
        // Setup
        spyOn(component.noteDeleted, 'emit');
        spyOn(console, 'error');
        notesServiceMock.deleteNote.and.returnValue(
            throwError(() => new Error('Error'))
        );
        component.dialogState = 'open';
        component.noteId = 123;

        // Call the method
        component.onConfirmDelete();

        // Assert
        expect(notesServiceMock.deleteNote).toHaveBeenCalledWith(123);
        expect(component.noteDeleted.emit).not.toHaveBeenCalled();
        expect(console.error).toHaveBeenCalled();
        // In the actual implementation, the dialog doesn't close on error
        expect(component.dialogState).toBe('open');
    });

    // Test noteId property
    it('should have the correct noteId when set', () => {
        // Setup
        const testNoteId = 123;

        // Set the property
        component.noteId = testNoteId;

        // Assert
        expect(component.noteId).toBe(testNoteId);
    });
});
