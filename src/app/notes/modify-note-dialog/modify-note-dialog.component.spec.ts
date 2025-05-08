import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ModifyNoteDialogComponent } from './modify-note-dialog.component';
import { NotesService } from '../notes.service';
import { Note } from '../Note';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('ModifyNoteDialogComponent', () => {
    let component: ModifyNoteDialogComponent;
    let fixture: ComponentFixture<ModifyNoteDialogComponent>;
    let mockNotesService: jasmine.SpyObj<NotesService>;

    beforeEach(async () => {
        // Create mock for NotesService
        mockNotesService = jasmine.createSpyObj('NotesService', ['updateNote']);
        mockNotesService.updateNote.and.returnValue(
            of({ id: 1, title: 'Updated Note', content: 'Updated content' })
        );

        await TestBed.configureTestingModule({
            imports: [ModifyNoteDialogComponent, FormsModule, CommonModule],
            providers: [{ provide: NotesService, useValue: mockNotesService }],
        }).compileComponents();

        fixture = TestBed.createComponent(ModifyNoteDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
