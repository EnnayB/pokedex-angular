import { Injectable } from '@angular/core';
import { User, UserService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | undefined;

  constructor(private userService: UserService) {}

  authenticate(login: string, password: string): User | undefined {
    const user = this.userService.getUsers().find((u) => u.login === login && u.password === password)
    this.currentUser = user
    return user
  }

  getCurrentUser(): User | undefined {
    return this.currentUser
  }

  logout(): void {
    this.currentUser = undefined
  }
}
