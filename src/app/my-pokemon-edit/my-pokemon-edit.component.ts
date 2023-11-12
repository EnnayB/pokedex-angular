import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MyPokemon, MyPokemonService} from "../service/my-pokemons.service";
import {PokemonsService, PokemonTypes} from "../service/pokemons.service";

@Component({
  selector: 'app-my-pokemon-edit',
  templateUrl: './my-pokemon-edit.component.html',
  styleUrls: ['./my-pokemon-edit.component.css']
})
export class MyPokemonEditComponent  implements OnInit {
  constructor(
    private pokemonService: PokemonsService,
    private myPokemonService: MyPokemonService,
    private route: ActivatedRoute
  ) {}
  existingPokemon: MyPokemon | undefined;
  pokemonId?: number = undefined
  pokemonTypes = this.pokemonService.pokemonTypes;

  newPokemonName: string = '';
  newPokemonImage: File | undefined = undefined;
  newPokemonTypes: PokemonTypes[] = [];
  newPokemonWeight?: number = undefined;
  newPokemonHeight?: number = undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pokemonId = +params['id'];
      this.existingPokemon = this.myPokemonService.getPokemonDetail(this.pokemonId);

      if (this.existingPokemon) {
        this.newPokemonName = this.existingPokemon.name || '';
        this.newPokemonTypes = this.existingPokemon.types || [];
        this.newPokemonWeight = this.existingPokemon.weight;
        this.newPokemonHeight = this.existingPokemon.height;
      }
    });
  }
  updatePokemon(): void {
    if (this.existingPokemon) {
      this.existingPokemon.name = this.newPokemonName
      this.existingPokemon.image = this.newPokemonImage
      this.existingPokemon.types = this.newPokemonTypes
      this.existingPokemon.weight = this.newPokemonWeight
      this.existingPokemon.height = this.newPokemonHeight

      this.myPokemonService.updatePokemon(this.existingPokemon)
      this.myPokemonService.showPokemonDetail(this.existingPokemon)
    } else {
      console.error('Pokemon not found for update');
    }
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
}
