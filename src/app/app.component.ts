import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: FirebaseListObservable<any[]>;
  itens: FirebaseListObservable<any[]>;
  authUser: any;
  constructor(private _af: AngularFire) {
    this.users = _af.database.list('/users');
    this.itens = _af.database.list('/itens');
    this._af.auth.subscribe(auth => console.log(auth));
  }


  delete(user: any) {
    console.log(user);
    this._af.database.object(`/users/${user.$key}`).remove();
  }

  login() {
    this._af.auth.login();
  }

  logout() {
    this._af.auth.logout();
  }

}
