import { NgModule } from '@angular/core';

// Imports module routing
import { AppRoutingModule } from './app-routing.module';

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Imports modules
import { ComponentsModule } from './components/components.module';

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
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
