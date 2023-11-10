import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: 'pokedex', loadChildren: () => import('./pokemon-list/pokemon-list-page/pokemon-list-page.module').then(m => m.PokemonListPageModule) },
  { path: 'pokedex/:name', component: PokemonDetailComponent },
  { path: '', redirectTo: '/pokedex' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
