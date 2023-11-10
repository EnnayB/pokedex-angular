import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/config';
import { Observable } from 'rxjs';

export type PokemonTypes =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'unknown'
  | 'shadow'

export interface MinimalPokemonDTO {
  name: string
  url: string
}

export interface PokemonListDTO {
  count: number
  next: string
  results: MinimalPokemonDTO[]
}

export interface PokemonDetailType {
  name: PokemonTypes
  url: string
}

export interface PokemonDetailDTO {
  id: number
  name: string
  types: { slot: number, type: PokemonDetailType }[]
  sprites: { front_default: string }
  weight: number
  height: number
}

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pageLimit: number = 10
  private userFavoritePokemons: Record<number, number[]> = {}

  constructor(
    private http: HttpClient
  ) { }

  // Get Pokemons
  getPokemons = (): Observable<PokemonListDTO> => {
    return this.http.get<PokemonListDTO>(`${BASE_URL}/pokemon?limit=${this.pageLimit}`)
  }

  getPokemonDetail = (name: string): Observable<PokemonDetailDTO> => {
    return this.http.get<PokemonDetailDTO>(`${BASE_URL}/pokemon/${name}`)
  }

  getUserFavoritePokemons(userId: number): number[] {
    return this.userFavoritePokemons[userId] || []
  }

  addUserFavoritePokemon(userId: number, pokemonId: number): void {
    if (this.userFavoritePokemons[userId]) {
      this.userFavoritePokemons[userId].push(pokemonId)
    }
  }

  removeUserFavoritePokemon(userId: number, pokemonId: number) : void {
    if (this.userFavoritePokemons[userId]) {
      const index = this.userFavoritePokemons[userId]?.indexOf(pokemonId)

      if (index !== -1) {
        this.userFavoritePokemons[userId].splice(index, 1)
      }
    }
  }
}
