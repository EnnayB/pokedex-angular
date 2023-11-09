import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, username: 'user1', favoritePokemon: ['pikachu', 'charmander'] },
    { id: 2, username: 'user2', favoritePokemon: ['bulbasaur', 'squirtle'] },
  ]

  getUsers(): User[] {
    return this.users
  }
}

export interface User {
  id: number
  username: string
  favoritePokemon: string[]
}
