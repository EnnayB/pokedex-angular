import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersListComponent} from "./pokemon-list/users-list/users-list.component";

const routes: Routes = [
  { path: 'pokedex', loadChildren: () => import('./pokemon-list/pokemon-list-page/pokemon-list-page.module').then(m => m.PokemonListPageModule) },
  { path: 'users', component: UsersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
