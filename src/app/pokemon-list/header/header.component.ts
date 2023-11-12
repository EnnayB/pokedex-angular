import { Component } from '@angular/core'
import { Router } from '@angular/router'
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggled: boolean = false

  constructor(private authService: AuthService, private router: Router) {}

  toggleMenu() {
    this.toggled = !this.toggled
  }

  navigateToUsersList() {
    this.router.navigate(['/users'])
  }

  navigateToFavorites() {
    this.router.navigate(['/favorites'])
    const currentUser = this.authService.getCurrentUser()

    console.log(currentUser?.isAdmin)
    if (currentUser && currentUser.isAdmin) {
      this.router.navigate(['/users'])
    } else {
      this.router.navigate(['/error'])
    }
  }
}
