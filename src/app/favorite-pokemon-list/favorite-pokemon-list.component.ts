import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { PokemonsService, PokemonDetailDTO } from '../service/pokemons.service';

@Component({
  selector: 'app-favorite-pokemon-list',
  templateUrl: './favorite-pokemon-list.component.html',
  styleUrls: ['./favorite-pokemon-list.component.css']
})
export class FavoritePokemonListComponent implements OnInit {
  favoritePokemons: PokemonDetailDTO[] = [];

  constructor(
      private authService: AuthService,
      private pokemonService: PokemonsService
  ) { }

  ngOnInit(): void {
    const userId = this.authService.getCurrentUser()?.id;

    if (userId) {
      const favoritePokemonIds = this.pokemonService.getUserFavoritePokemons(userId);

      favoritePokemonIds.forEach(pokemonId => {
        this.pokemonService.getPokemonDetail(pokemonId.toString())
            .subscribe(pokemon => this.favoritePokemons.push(pokemon));
      });
    }
  }
}
