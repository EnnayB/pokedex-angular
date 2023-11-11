import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { PokemonDetailDTO, PokemonsService } from 'src/app/service/pokemons.service'
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonDetailDTO[] = []

  constructor(
    private authService: AuthService,
    private pokemonService: PokemonsService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.pokemonService.getPokemons()
      .subscribe((res) => {
        console.log(res)
        res.results.forEach(pokemon => {
          this.pokemonService.getPokemonDetail(pokemon.name)
            .subscribe(p => this.pokemons.push(p))
        })
      })
  }

  showPokemonDetail(pokemon: PokemonDetailDTO): void {
    this.router.navigate(['/pokedex', pokemon.id])
  }

  toggleFavorite(pokemonId: number): void {
    const userId = this.authService.getCurrentUser()?.id as number
    const favorites = this.pokemonService.getUserFavoritePokemons(userId).includes(pokemonId)

    if (favorites) {
      this.pokemonService.removeUserFavoritePokemon(userId, pokemonId);
    } else {
      this.pokemonService.addUserFavoritePokemon(userId, pokemonId);
    }
  }
}
