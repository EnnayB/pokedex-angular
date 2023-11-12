import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { PokemonListPageComponent } from './pokemon-list-page.component';
import { PokemonListPageRoutingModule } from './pokemon-list-page-routing.module';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {TranslateModule} from "@ngx-translate/core";
import {MyPokemonListComponent} from "../../my-pokemon-list/my-pokemon-list.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PokemonListPageComponent,
    HeaderComponent,
    PokemonListComponent,
    MyPokemonListComponent
  ],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        PokemonListPageRoutingModule,
        TranslateModule,
        FormsModule
    ]
})
export class PokemonListPageModule { }
