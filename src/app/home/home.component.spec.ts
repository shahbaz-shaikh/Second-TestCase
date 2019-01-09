import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
// -------------------------------------------- //
import { HomeComponent } from './home.component';
import { UsersService } from '../service/users.service';
import { By } from '../../../node_modules/@angular/platform-browser';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let USERS;
  let mockUsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [HomeComponent],
      providers: [UsersService]
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

  describe('shllow test', () => {
    it('Should have the correct Users', () => {
      fixture.componentInstance.users = [{ id: 1, name: 'Jane', role: 'Designer', pokemon: 'Blastoise'}];
      const deA = (fixture.debugElement.query(By.css('div')));
      expect(deA.nativeElement.querySelector('div').textContent).toContain('');
    });
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
    ];

    mockUsersService = jasmine.createSpyObj(['getUsers', 'deleteUser']);

    component = new HomeComponent(mockUsersService);
  });

  describe('UserService in HomeComponent', () => {
    it('should set Users correctly from the UserService', () => {
      mockUsersService.getUsers.and.returnValue(of(USERS));
      component.users = USERS;
      expect(component.users.length).toBe(2);
    });
  });

  describe('delete', () => {

    it('should remove the indicated user from users list', () => {
      mockUsersService.deleteUser.and.returnValue(of({}));

      component.users = USERS;

      component.delete(USERS[2]);

      expect(component.users.length).toBe(2);
    });

    it('should call deleteUsers', () => {
      mockUsersService.deleteUser.and.returnValue(of(true));

      component.users = USERS;

      component.delete(USERS[2]);

     expect(mockUsersService.deleteUser).toHaveBeenCalled();
    });

  });

});
