import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports
import { HomeComponent } from './pages/home/home.component';
import { GameOfTheYearComponent } from './pages/game-of-the-year/game-of-the-year.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'goty', component: GameOfTheYearComponent },

  // Default
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
