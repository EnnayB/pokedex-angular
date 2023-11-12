import { Injectable } from '@angular/core';
import { User, UserService } from './users.service';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser?: User;

  constructor(private userService: UserService, private router: Router) {}

  authenticate(login: string, password: string): User | undefined {
    const user = this.userService.getUsers().find((u) => u.login === login && u.password === password)
    this.currentUser = user
    return user
  }

  getCurrentUser(): User | undefined {
    return this.currentUser
  }

  isAuthenticated(): boolean {
    return this.currentUser != undefined
  }

  logout(): void {
    this.currentUser = undefined
    this.router.navigate(['/login'])
  }
}
