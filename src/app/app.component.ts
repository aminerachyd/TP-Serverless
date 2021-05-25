import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  data: any = {};

  constructor(public authService: AuthService, private http: HttpClient) {
    this.email = '';
    this.password = '';
  }

  async ngOnInit(): Promise<void> {
    try {
      const res: any = await this.http
        .get('https://us-central1-serverless-tp-1.cloudfunctions.net/tpfaas')
        .toPromise();

      console.log(res);
      this.data = res;
    } catch (error) {
      console.log(error);
    }
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
