import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<any>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  async signup(email: string, password: string) {
    try {
      const res = await this.firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      console.log('Registration success: ', res);
    } catch (error) {
      console.log('Erreur: ', error.message);
    }
  }

  async login(email: string, password: string) {
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password);

      console.log('Login success');
    } catch (error) {
      console.log('Erreur: ', error.message);
    }
  }

  async logout() {
    try {
      await this.firebaseAuth.signOut();

      console.log('Logout success');
    } catch (error) {
      console.log('Erreur: ', error.message);
    }
  }
}
