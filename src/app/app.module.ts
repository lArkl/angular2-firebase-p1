import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireService} from './providers/angular-fire.service';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

export const firebaseConfig={
	apiKey: "AIzaSyAbNvxCpE0nC1w5TG-iEfe7daFPPInGm5E",
	authDomain: "ferroproject-bd730.firebaseapp.com",
	databaseURL: "https://ferroproject-bd730.firebaseio.com",
	storageBucket: "ferroproject-bd730.appspot.com",
	messagingSenderId: "938778045393"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AngularFireService],
  bootstrap: [AppComponent]
})


export class AppModule {}
