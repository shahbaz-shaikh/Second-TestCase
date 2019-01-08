import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { log } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users: any[];
  constructor(private service: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.service.getUsers().subscribe( (res) => {
      this.users = res;
      console.log(this.users);
    });
  }

  public delete(id: any): void {
    this.users = this.users.filter(u => u !== id);
    this.service.deleteUser(id).subscribe( () => this.getUsers()); 
  }
}
