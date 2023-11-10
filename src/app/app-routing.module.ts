import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'pokedex', loadChildren: () => import('./pokemon-list/pokemon-list-page/pokemon-list-page.module').then(m => m.PokemonListPageModule) },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
