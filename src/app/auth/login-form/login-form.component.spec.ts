import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { LoginFormComponent } from './login-form.component';
import { LoginService } from './login.service';

// Create a mock for LoginService
const loginServiceMock = {
    login: jasmine
        .createSpy('login')
        .and.returnValue(of({ token: 'fake-token' })),
};

describe('LoginFormComponent', () => {
    let component: LoginFormComponent;
    let fixture: ComponentFixture<LoginFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [LoginFormComponent],
            providers: [{ provide: LoginService, useValue: loginServiceMock }],
        }).compileComponents();

        fixture = TestBed.createComponent(LoginFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Additional tests for login form functionality
});
