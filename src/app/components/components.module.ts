import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
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
    CommonModule
  ]
})
export class ComponentsModule { }
