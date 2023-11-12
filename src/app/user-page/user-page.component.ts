import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../service/users.service';
import { AuthService } from "../service/auth.service";
import { TranslateService } from '@ngx-translate/core';

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

  constructor(
      private authService: AuthService,
      private userService: UserService,
      private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(): void {
    this.users = this.userService.getUsers()
  }

  deleteUser(user: User): void {
    this.currentUser = this.authService.getCurrentUser()
    const currentLang = this.translateService.currentLang || 'fr'

    if (this.currentUser?.id === user.id) {
      console.log(currentLang)
      const confirmationMessageKey = 'CONFIRM_DELETE_OWN_ACCOUNT'

      this.translateService.get(confirmationMessageKey).subscribe((confirmationMessage) => {
        if (confirm(confirmationMessage)) {
          this.userService.deleteUser(user.id)
          this.authService.logout()
        }
      })
    } else {
      const confirmationMessageKey = 'CONFIRM_DELETE_USER'

      this.translateService.get(confirmationMessageKey).subscribe((confirmationMessage) => {
        if (confirm(confirmationMessage)) {
          this.userService.deleteUser(user.id)
          this.loadUsers();
        }
      })
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
