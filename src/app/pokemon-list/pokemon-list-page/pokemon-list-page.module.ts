import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { PokemonListPageComponent } from './pokemon-list-page.component';
import { PokemonListPageRoutingModule } from './pokemon-list-page-routing.module';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PokemonListPageComponent,
    HeaderComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokemonListPageRoutingModule
  ]
})
export class PokemonListPageModule { }
