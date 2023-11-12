import { Component, OnInit } from '@angular/core'
import { User, UserService } from '../service/users.service'

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  users: User[] = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(): void {
    this.users = this.userService.getUsers()
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId)
    this.loadUsers()
  }

  addUser(): void {
    const newUser: User = {
      id: this.users.length + 1,
      login: 'NewUser', // fixme
      password: 'Password',
      isAdmin: false,
    };

    this.userService.addUser(newUser);
    this.loadUsers();
  }
}
