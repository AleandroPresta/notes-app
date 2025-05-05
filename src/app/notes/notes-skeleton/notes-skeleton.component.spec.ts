import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesSkeletonComponent } from './notes-skeleton.component';

describe('NotesSkeletonComponent', () => {
  let component: NotesSkeletonComponent;
  let fixture: ComponentFixture<NotesSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
