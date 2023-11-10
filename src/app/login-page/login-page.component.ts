import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/service/auth.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = ''
  password: string = ''

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.authenticate(this.username, this.password)) {
      this.router.navigate(['/pokedex']);
    } else {
      // fixme
      console.log('Authentication failed');
    }
  }
}
