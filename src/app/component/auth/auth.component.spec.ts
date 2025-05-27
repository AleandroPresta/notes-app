import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthComponent } from './auth.component';
import { LoginService } from '../service/login.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Create a mock for LoginService
const loginServiceMock = {
    login: jasmine
        .createSpy('login')
        .and.returnValue(of({ token: 'fake-token' })),
    // Add any other methods used by AuthComponent
};

describe('AuthComponent', () => {
    let component: AuthComponent;
    let fixture: ComponentFixture<AuthComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                // Import the standalone component
                AuthComponent,
                // Include HttpClientTestingModule for HttpClient
                HttpClientTestingModule,
            ],
            providers: [{ provide: LoginService, useValue: loginServiceMock }],
        }).compileComponents();

        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Additional tests for AuthComponent
});
