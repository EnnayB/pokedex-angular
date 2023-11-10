import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetailDTO, PokemonsService } from 'src/app/service/pokemons.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonDetailDTO | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const pokemonName = params['name'];
      if (pokemonName) {
        this.pokemonService.getPokemonDetail(pokemonName)
          .subscribe(p => this.pokemon = p);
      }
    });
  }
}
