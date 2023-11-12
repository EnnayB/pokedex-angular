import { Component } from '@angular/core'
import { Router } from '@angular/router'
import {AuthService} from "../../service/auth.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggled: boolean = false

  constructor(private authService: AuthService, private router: Router, private translate: TranslateService) {}

  toggleMenu() {
    this.toggled = !this.toggled
  }

  navigateToPokedex() {
    this.router.navigate(['/pokedex'])
  }

  navigateToUsersList() {
    const currentUser = this.authService.getCurrentUser()

    if (currentUser && currentUser.isAdmin) {
        this.router.navigate(['/users'])
    } else {
        this.router.navigate(['/error'])
    }
  }

  navigateToFavorites() {
    this.router.navigate(['/favorites'])
  }

  logout() {
    this.authService.logout();
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }
}
