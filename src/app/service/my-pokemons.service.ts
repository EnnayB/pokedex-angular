import { Injectable } from '@angular/core'
import {PokemonTypes} from "./pokemons.service";

@Injectable({
  providedIn: 'root'
})
export class MyPokemonService {
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
}

export interface MyPokemon {
  id: number
  name: string;
  image?: File;
  types: PokemonTypes[];
  weight?: number;
  height?: number;
}
