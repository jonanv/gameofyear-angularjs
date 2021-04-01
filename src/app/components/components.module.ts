import { NgModule } from '@angular/core';

// Imports module
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

// Imports components
import { NavbarComponent } from './navbar/navbar.component';
import { GraphicBarComponent } from './graphic-bar/graphic-bar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    GraphicBarComponent
  ],
  exports: [
    NavbarComponent,
    GraphicBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
