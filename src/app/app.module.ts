import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule} from "@angular/forms";
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {SharedModule} from "./shared/shared.module";
import { FavoritePokemonListComponent } from './favorite-pokemon-list/favorite-pokemon-list.component';
import {AuthGuard} from "./service/auth.guard";
import {PokemonListPageModule} from "./pokemon-list/pokemon-list-page/pokemon-list-page.module";
import { UserPageComponent } from './user-page/user-page.component';
import { UserPageErrorComponent } from './user-page-error/user-page-error.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PokemonDetailComponent,
    FavoritePokemonListComponent,
    UserPageComponent,
    UserPageErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    FormsModule,
    SharedModule,
    PokemonListPageModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
