import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports
import { AppRoutingModule } from './app-routing.module';

// Imports components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameOfTheYearComponent } from './pages/game-of-the-year/game-of-the-year.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameOfTheYearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
