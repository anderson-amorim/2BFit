import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBs62Xt9AsvLD8cVgR5M8nBgM552S7hniQ",
  authDomain: "bfit-763b7.firebaseapp.com",
  databaseURL: "https://bfit-763b7.firebaseio.com",
  storageBucket: "bfit-763b7.appspot.com",
  messagingSenderId: "611190465729"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }