import { NgModule } from '@angular/core';

// Imports module
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
