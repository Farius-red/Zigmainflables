import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// tslint:disable-next-line:import-spacing
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public logueado = false;

  constructor(public auth: AngularFireAuth, public fs: AngularFirestore) {}

  // tslint:disable-next-line:typedef
  async login(email: string, clave: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(email, clave);
      this.logueado = true;
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  // tslint:disable-next-line:typedef
  async registro(email: string, clave: string) {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(
        email,
        clave
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // tslint:disable-next-line:typedef
  async logout() {
    try {
      await this.auth.signOut();
      this.logueado = false;
    } catch (error) {
      console.log(error);
    }
  }

  // tslint:disable-next-line:typedef
  getCurrentUser() {
    return this.auth.authState.pipe(first()).toPromise();
  }
}
