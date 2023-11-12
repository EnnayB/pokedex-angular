import { NgModule } from '@angular/core'
import { AuthGuard } from './service/auth.guard'
import { LoginPageComponent } from './login-page/login-page.component'
import { RouterModule, Routes } from '@angular/router'
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {FavoritePokemonListComponent} from "./favorite-pokemon-list/favorite-pokemon-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'pokedex', loadChildren: () => import('./pokemon-list/pokemon-list-page/pokemon-list-page.module').then(m => m.PokemonListPageModule), canActivate: [AuthGuard] },
  { path: 'pokedex/:id', component: PokemonDetailComponent },
  { path: 'favorites', component: FavoritePokemonListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
