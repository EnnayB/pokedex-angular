import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, login: 'john.doe', password: '1234', isAdmin: true },
    { id: 2, login: 'bob.doe', password: '0000', isAdmin: false },
  ]

  getUsers(): User[] {
    return this.users
  }
}

export interface User {
  id: number
  login: string
  password: string
  isAdmin: boolean
}
