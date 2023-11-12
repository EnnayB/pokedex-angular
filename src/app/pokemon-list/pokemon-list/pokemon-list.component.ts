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
    this.pokemonService.showPokemonDetail(pokemon);
  }

  toggleFavorite(event: Event, pokemonId: number): void {
    event.stopPropagation() // pour ne pas ouvrir le détail du pokemon
    const userId = this.authService.getCurrentUser()?.id as number

    if (this.isFavorite(pokemonId)) {
      this.pokemonService.removeUserFavoritePokemon(userId, pokemonId)
      console.log(this.pokemonService.getUserFavoritePokemons(userId))
    } else {
      this.pokemonService.addUserFavoritePokemon(userId, pokemonId)
      console.log(this.pokemonService.getUserFavoritePokemons(userId))
    }
  }

  isFavorite(id: number) {
    const userId = this.authService.getCurrentUser()?.id as number
    return this.pokemonService.getUserFavoritePokemons(userId).includes(id)
  }
}
