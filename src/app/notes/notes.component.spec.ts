import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotesComponent } from './notes.component';
import { NotesService } from './notes.service';
import { of } from 'rxjs';
import { UserInfo } from './UserInfo';

describe('NotesComponent', () => {
    let component: NotesComponent;
    let fixture: ComponentFixture<NotesComponent>;
    let mockNotesService: jasmine.SpyObj<NotesService>;

    beforeEach(async () => {
        // Create mock for localStorage
        spyOn(localStorage, 'getItem').and.returnValue('mock-token');

        // Create mock NotesService
        mockNotesService = jasmine.createSpyObj('NotesService', [
            'getUserInfo',
        ]);
        mockNotesService.getUserInfo.and.returnValue(
            of(new UserInfo(1, 'John', 'Doe'))
        );

        await TestBed.configureTestingModule({
            imports: [NotesComponent, HttpClientTestingModule],
            providers: [{ provide: NotesService, useValue: mockNotesService }],
        }).compileComponents();

        fixture = TestBed.createComponent(NotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get user id from service', () => {
        expect(mockNotesService.getUserInfo).toHaveBeenCalled();
    });
});
