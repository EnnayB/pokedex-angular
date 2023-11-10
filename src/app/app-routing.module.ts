import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginPageComponent } from './login-page/login-page.component'
import { AuthGuard } from './service/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'pokedex', loadChildren: () => import('./pokemon-list/pokemon-list-page/pokemon-list-page.module').then(m => m.PokemonListPageModule), canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
