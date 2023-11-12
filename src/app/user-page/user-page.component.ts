import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../service/users.service';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  users: User[] = []
  currentUser: User | undefined
  newUserName: string = ''
  newUserPassword: string = ''
  newUserIsAdmin: boolean = false

  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(): void {
    this.users = this.userService.getUsers()
  }

  deleteUser(user: User): void { // fixme : how to translate the confirm message ?
    this.currentUser = this.authService.getCurrentUser()
    if (this.currentUser?.id === user.id) {
      if (confirm('Si tu supprimes ton propre compte, tu seras déconnecté !')) {
        this.userService.deleteUser(user.id)
        this.authService.logout()
      }
    } else {
      if (confirm('Es-tu sûr de vouloir supprimer cet utilisateur ?')) {
        this.userService.deleteUser(user.id)
        this.loadUsers()
      }
    }
  }

  addUser(): void {
    const newUser: User = {
      id: this.users.length + 1,
      login: this.newUserName,
      password: this.newUserPassword,
      isAdmin: this.newUserIsAdmin,
    };

    this.userService.addUser(newUser)
    this.clearNewUserForm()
    this.loadUsers()
  }

  clearNewUserForm(): void {
    this.newUserName = ''
    this.newUserPassword = ''
    this.newUserIsAdmin = false
  }
}
