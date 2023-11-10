import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, login: 'john.doe', password: '1234', favoritePokemons: ['pikachu', 'charmander'] },
    { id: 2, login: 'bob.doe', password: '0000', favoritePokemons: ['bulbasaur', 'squirtle'] },
  ]

  getUsers(): User[] {
    return this.users
  }
}

export interface User {
  id: number
  login: string
  password: string
  favoritePokemons: string[]
}
