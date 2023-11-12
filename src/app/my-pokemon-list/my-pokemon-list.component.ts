import {Component, OnInit} from '@angular/core'
import {PokemonDetailDTO, PokemonsService, PokemonTypes} from "../service/pokemons.service"
import {MyPokemon, MyPokemonService} from "../service/my-pokemons.service"
import {AuthService} from "../service/auth.service";
import {User} from "../service/users.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-my-pokemon-list',
  templateUrl: './my-pokemon-list.component.html',
  styleUrls: ['./my-pokemon-list.component.css']
})
export class MyPokemonListComponent implements OnInit {
  constructor(
    private pokemonService: PokemonsService,
    private myPokemonService: MyPokemonService,
    private translateService: TranslateService) {}
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
    const confirmationMessageKey = 'CONFIRM_DELETE_POKEMON'
    const currentLang = this.translateService.currentLang || 'fr'

    this.translateService.get(confirmationMessageKey).subscribe((confirmationMessage) => {
      if (confirm(confirmationMessage)) {
        this.myPokemonService.deletePokemon(pokemon.id)
        this.pokemons = this.myPokemonService.getMyPokemons()
      }
    })
  }

  showPokemonDetail(pokemon: MyPokemon): void {
    this.myPokemonService.showPokemonDetail(pokemon);
  }
}
