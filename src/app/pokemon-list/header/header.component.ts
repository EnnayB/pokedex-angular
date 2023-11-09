import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggled: boolean = false

  constructor(private router: Router) {}

  toggleMenu() {
    this.toggled = !this.toggled
  }

  navigateToUsersList() {
    this.router.navigate(['/users']);
  }
}
