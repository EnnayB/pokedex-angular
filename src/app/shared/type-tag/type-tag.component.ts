import { Component, Input } from '@angular/core';
import { PokemonDetailType, PokemonTypes } from 'src/app/service/pokemons.service';

@Component({
  selector: 'app-type-tag',
  templateUrl: './type-tag.component.html',
  styleUrls: ['./type-tag.component.css']
})
export class TypeTagComponent {
  @Input() type: PokemonTypes = 'normal'
}
