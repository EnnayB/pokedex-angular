import { Component } from '@angular/core'
import { UserService, User } from '../../service/users.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users: User[]

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}
