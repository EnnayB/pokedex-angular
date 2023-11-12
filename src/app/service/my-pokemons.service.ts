import { Injectable } from '@angular/core'
import {PokemonTypes} from "./pokemons.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MyPokemonService {
  constructor(private router: Router) {}

  private myPokemons: MyPokemon[] = []

  getMyPokemons(): MyPokemon[] {
    return this.myPokemons
  }

  addNewPokemon(newPokemon: MyPokemon): void {
    this.myPokemons.push(newPokemon)
  }

  deletePokemon(pokemonId: number): void {
    const index = this.myPokemons.findIndex((pokemon) => pokemon.id === pokemonId)
    if (index !== -1) {
      this.myPokemons.splice(index, 1)
    }
  }

  showPokemonDetail(pokemon: MyPokemon): void {
    this.router.navigate(['/my-pokedex', pokemon.id])
  }

  getPokemonDetail(id: number): MyPokemon | undefined {
    return this.myPokemons.find((pokemon) => pokemon.id === id);
  }
}

export interface MyPokemon {
  id: number
  name: string;
  image?: File;
  types: PokemonTypes[];
  weight?: number;
  height?: number;
}
