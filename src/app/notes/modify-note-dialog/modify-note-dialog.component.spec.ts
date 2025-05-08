import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyNoteDialogComponent } from './modify-note-dialog.component';

describe('ModifyNoteDialogComponent', () => {
  let component: ModifyNoteDialogComponent;
  let fixture: ComponentFixture<ModifyNoteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyNoteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
