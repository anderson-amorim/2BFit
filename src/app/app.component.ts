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
  constructor(af: AngularFire) {
    this.users = af.database.list('/users');
    this.itens = af.database.list('/itens');
  }
}
