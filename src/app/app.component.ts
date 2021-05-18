import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'inpt-cloud-mamgas';
  email: string;
  password: string;

  constructor(public authService: AuthService) {
    this.email = '';
    this.password = '';
  }

  async signup() {
    await this.authService.signup(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  async login() {
    await this.authService.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  async logout() {
    await this.authService.logout();
    this.email = '';
    this.password = '';
  }
}
