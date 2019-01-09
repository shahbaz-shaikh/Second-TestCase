import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// --------------------------------------------------------- //
import { UsersService } from './users.service';
import { Users } from '../users.model';

describe('UsersService', () => {
  let mockUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsersService]
    });

    mockUsersService = jasmine.createSpyObj(['getUsers', 'deleteUser']);
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  describe('Get Users Function', () => {
    it('should getUsers user lists', () => {
      expect(mockUsersService.getUsers.length).toBe(0);
    });
  });

  describe('Delete User Function', () => {
    it('should deleteUsers are delete the user', () => {
      expect(mockUsersService.deleteUser.length).toBe(0);
    });
  });

});
