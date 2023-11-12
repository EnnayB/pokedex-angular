import { NgModule } from '@angular/core'
import { AuthGuard } from './service/auth.guard'
import { LoginPageComponent } from './login-page/login-page.component'
import { RouterModule, Routes } from '@angular/router'
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {FavoritePokemonListComponent} from './favorite-pokemon-list/favorite-pokemon-list.component';
import {UserPageComponent} from "./user-page/user-page.component";
import {UserPageErrorComponent} from "./user-page-error/user-page-error.component";
import {MyPokemonDetailsComponent} from "./my-pokemon-details/my-pokemon-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'pokedex', loadChildren: () => import('./pokemon-list/pokemon-list-page/pokemon-list-page.module').then(m => m.PokemonListPageModule), canActivate: [AuthGuard] },
  { path: 'pokedex/:id', component: PokemonDetailComponent },
  { path: 'favorites', component: FavoritePokemonListComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserPageComponent, canActivate: [AuthGuard] },
  { path: 'error', component: UserPageErrorComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'my-pokedex/:id', component: MyPokemonDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
