import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // fixme
  private readonly validUsername = 'user'
  private readonly validPassword = 'password'

  authenticate(username: string, password: string): boolean {
    // fixme
    return username === this.validUsername && password === this.validPassword
  }
}
