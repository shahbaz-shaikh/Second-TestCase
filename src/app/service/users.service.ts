import { Injectable } from '@angular/core';
// ---------------------------------------------------- //
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Users } from '../users.model';

@Injectable()
export class UsersService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Users[]> {
    const url = this.baseUrl +  '/users';
    return this.http.get<Users[]>(url);
  }

  public deleteUser(id: Users): Observable<Users> {
    const url = this.baseUrl + '/users' + '/' + id;
    return this.http.delete<Users>(url);
  }
}
