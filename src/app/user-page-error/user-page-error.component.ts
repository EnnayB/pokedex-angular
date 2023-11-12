import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-page-error',
  templateUrl: './user-page-error.component.html',
  styleUrls: ['./user-page-error.component.css']
})
export class UserPageErrorComponent {
    constructor(private router: Router) {}

    navigateToPokedex(): void {
        this.router.navigate(['/pokedex']);
    }
}
