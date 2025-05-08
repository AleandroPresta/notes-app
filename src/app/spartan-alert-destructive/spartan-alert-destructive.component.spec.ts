import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartanAlertDestructiveComponent } from './spartan-alert-destructive.component';

describe('SpartanAlertDestructiveComponent', () => {
  let component: SpartanAlertDestructiveComponent;
  let fixture: ComponentFixture<SpartanAlertDestructiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpartanAlertDestructiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpartanAlertDestructiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
