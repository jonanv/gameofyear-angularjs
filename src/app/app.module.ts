import { NgModule } from '@angular/core';

// Imports module routing
import { AppRoutingModule } from './app-routing.module';

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Imports modules
import { ComponentsModule } from './components/components.module';

// Imports components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameOfTheYearComponent } from './pages/game-of-the-year/game-of-the-year.component';

// Import environment
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameOfTheYearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
