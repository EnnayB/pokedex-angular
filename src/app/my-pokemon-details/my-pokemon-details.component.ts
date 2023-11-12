import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MyPokemon, MyPokemonService} from "../service/my-pokemons.service";

@Component({
  selector: 'app-my-pokemon-details',
  templateUrl: './my-pokemon-details.component.html',
  styleUrls: ['./my-pokemon-details.component.css']
})
export class MyPokemonDetailsComponent implements OnInit {
  pokemon: MyPokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: MyPokemonService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const pokemonId = +params['id']
      this.pokemon = this.pokemonService.getPokemonDetail(pokemonId)
    });
  }
}
