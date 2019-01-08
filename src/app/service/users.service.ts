import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class UsersService {

  private baseUrl = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any[]> {
    const url = this.baseUrl +  '/users'
    return this.http.get<any[]>(url);
  }

  public deleteUser(id: any): Observable<any> {
    const url = this.baseUrl + '/users' + '/' + id;
    return this.http.delete<any>(url);
  }
}
