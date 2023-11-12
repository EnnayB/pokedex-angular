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

  addUser(newUser: User): void {
    this.users.push(newUser)
  }

  deleteUser(userId: number): void {
    const index = this.users.findIndex((user) => user.id === userId)
    if (index !== -1) {
      this.users.splice(index, 1)
    }
  }
}

export interface User {
  id: number
  login: string
  password: string
  isAdmin: boolean
}
