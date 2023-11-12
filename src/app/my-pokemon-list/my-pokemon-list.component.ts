import {Component, OnInit} from '@angular/core'
import {PokemonsService, PokemonTypes} from "../service/pokemons.service"
import {MyPokemon, MyPokemonService} from "../service/my-pokemons.service"
import {AuthService} from "../service/auth.service";
import {User} from "../service/users.service";

@Component({
  selector: 'app-my-pokemon-list',
  templateUrl: './my-pokemon-list.component.html',
  styleUrls: ['./my-pokemon-list.component.css']
})
export class MyPokemonListComponent implements OnInit {
  constructor(
    private pokemonService: PokemonsService,
    private authService: AuthService,
    private myPokemonService: MyPokemonService) {}
  pokemons: MyPokemon[] = []
  pokemonTypes: PokemonTypes[] = this.pokemonService.pokemonTypes

  newPokemonName: string = ''
  newPokemonImage: File | undefined = undefined
  newPokemonTypes: PokemonTypes[] = ['normal'];
  newPokemonWeight?: number = undefined
  newPokemonHeight?: number = undefined

  ngOnInit(): void {
    this.pokemons = this.myPokemonService.getMyPokemons();
  }

  onImageChange(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.newPokemonImage = files[0];
    }
  }

  getImagePreview(): string | null {
    return this.newPokemonImage ? URL.createObjectURL(this.newPokemonImage) : null;
  }

  addPokemon(): void {
    const createdPokemon: MyPokemon = {
      id: this.pokemons.length + 1,
      name: this.newPokemonName,
      image: this.newPokemonImage,
      types: this.newPokemonTypes,
      weight: this.newPokemonWeight,
      height: this.newPokemonHeight,
    };

    this.myPokemonService.addNewPokemon(createdPokemon)
    this.pokemons = this.myPokemonService.getMyPokemons()

    this.newPokemonName = ''
    this.newPokemonImage = undefined
    this.newPokemonTypes = ['normal']
    this.newPokemonWeight = undefined
    this.newPokemonHeight = undefined
  }

  deletePokemon(pokemon: MyPokemon): void {
    if (confirm('Es-tu sûr de vouloir supprimer ce Pokémon ?')) {
      this.myPokemonService.deletePokemon(pokemon.id)
      this.pokemons = this.myPokemonService.getMyPokemons()
    }
  }
}
