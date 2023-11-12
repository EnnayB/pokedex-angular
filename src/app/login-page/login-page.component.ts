import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/service/auth.service'
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  login: string = ''
  password: string = ''
  authenticationFailed: boolean = false

  constructor(private authService: AuthService, private router: Router, private translate: TranslateService) {}

  loginUser() {
    if (this.authService.authenticate(this.login, this.password)) {
      this.router.navigate(['/pokedex'])
    } else {
      this.authenticationFailed = true
    }
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }
}
