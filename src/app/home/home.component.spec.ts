import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/observable/of';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { UsersService } from '../service/users.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let USERS;
  let mockUsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [HomeComponent],
      providers: [{
        provide: UsersService,
        useValue: mockUsersService
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    USERS = [
      {
        id: 1,
        name: 'Jane',
        role: 'Designer',
        pokemon: 'Blastoise'
      },
      {
        id: 2,
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      }
    ]

    mockUsersService = jasmine.createSpyObj(['getUsers', 'deleteUser'])

    component = new HomeComponent(mockUsersService)
  })

  describe('view', () => {
    it('should display the user list', () => {
      mockUsersService.getUsers.and.returnValue(of(USERS))

      component.users = USERS;

      expect(mockUsersService.getUsers).toHaveBeenCalled();
    })
  })

  describe('delete', () => {

    it('should remove the indicated user from users list', () => {
      mockUsersService.deleteUser.and.returnValue(of(true))
      // spyOn(mockUsersService, 'deleteUser').and.returnValue(of(true))

      component.users = USERS;

      component.delete(USERS[2]);

      expect(component.users.length).toBe(2);
    })
  })

  it('should call deleteUsers', () => {
    mockUsersService.deleteUser.and.returnValue(of(true))

    component.users = USERS;

    component.delete(USERS[2]);

    expect(mockUsersService.deleteUser).toHaveBeenCalled();
  })

});