import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListPageComponent } from './pokemon-list-page.component';

const routes: Routes = [{ path: '', component: PokemonListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonListPageRoutingModule { }
