import { Component, OnInit } from '@angular/core';
// --------------------------------------------------- //
import { UsersService } from '../service/users.service';
import { Users } from '../users.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users: Users[];
  constructor(private service: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.service.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }

  public delete(id: Users): void {
    this.users = this.users.filter(u => u !== id);
    this.service.deleteUser(id).subscribe();
  }
}
