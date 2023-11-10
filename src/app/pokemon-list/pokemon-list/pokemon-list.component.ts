import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { PokemonDetailDTO, PokemonsService } from 'src/app/service/pokemons.service'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonDetailDTO[] = []

  constructor(
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

  showPokemonDetail(pokemonName: string): void {
    this.router.navigate(['/pokedex', pokemonName])
  }
}
