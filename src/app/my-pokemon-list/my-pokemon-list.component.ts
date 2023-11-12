import {Component, Input} from '@angular/core';
import {PokemonDetailDTO} from "../service/pokemons.service";

@Component({
  selector: 'app-my-pokemon-list',
  templateUrl: './my-pokemon-list.component.html',
  styleUrls: ['./my-pokemon-list.component.css']
})
export class MyPokemonListComponent {
  @Input() myPokemonList: PokemonDetailDTO[] = [];
}
