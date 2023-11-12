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

  updatePokemon(updatedPokemon: MyPokemon): void {
    const index = this.myPokemons.findIndex(pokemon => pokemon.id === updatedPokemon.id);

    if (index !== -1) {
      this.myPokemons[index] = updatedPokemon;
    } else {
      console.error('Pokemon not found for update:', updatedPokemon);
    }
  }

  editPokemon(pokemon: MyPokemon): void {
    this.router.navigate(['/edit-pokemon', pokemon.id]);
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
