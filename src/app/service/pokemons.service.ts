import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/config';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

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
  private userFavoritePokemons: Record<number, Set<number>> = {}

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // Get Pokemons
  getPokemons = (): Observable<PokemonListDTO> => {
    return this.http.get<PokemonListDTO>(`${BASE_URL}/pokemon?limit=${this.pageLimit}`)
  }

  getPokemonDetail = (name: string): Observable<PokemonDetailDTO> => {
    return this.http.get<PokemonDetailDTO>(`${BASE_URL}/pokemon/${name}`)
  }

  showPokemonDetail(pokemon: PokemonDetailDTO): void {
    this.router.navigate(['/pokedex', pokemon.id])
  }

  getUserFavoritePokemons(userId: number): number[] {
    const favoritesSet = this.userFavoritePokemons[userId]
    return favoritesSet ? Array.from(favoritesSet) : []
  }

  addUserFavoritePokemon(userId: number, pokemonId: number): void {
    if (!this.userFavoritePokemons[userId]) {
      this.userFavoritePokemons[userId] = new Set<number>()
    }
    this.userFavoritePokemons[userId].add(pokemonId)
  }

  removeUserFavoritePokemon(userId: number, pokemonId: number): void {
    const favoritesSet = this.userFavoritePokemons[userId]
    if (favoritesSet) {
      favoritesSet.delete(pokemonId)
    }
  }
}
