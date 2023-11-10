import { Injectable } from '@angular/core'
import {User, UserService} from "./users.service"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private userService: UserService) {}

  authenticate(login: string, password: string): User | undefined {
    return this.userService.getUsers().find(u => u.login === login && u.password === password)
  }
}
