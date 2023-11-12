import { Component, OnInit } from '@angular/core'
import { User, UserService } from '../service/users.service'

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  users: User[] = []
  newUserName: string = ''
  newUserPassword: string = ''
  newUserIsAdmin: boolean = false

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
    console.log(this.newUserName, this.newUserPassword, this.newUserIsAdmin)
    const newUser: User = {
      id: this.users.length + 1,
      login: this.newUserName,
      password: this.newUserPassword,
      isAdmin: this.newUserIsAdmin,
    };

    this.userService.addUser(newUser)
    console.log(this.userService.getUsers())
    this.clearNewUserForm()
    this.loadUsers()
  }

  clearNewUserForm(): void {
    this.newUserName = ''
    this.newUserPassword = ''
    this.newUserIsAdmin = false
  }
}
