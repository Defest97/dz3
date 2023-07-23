import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { FormsModule } from '@angular/forms';
import { Task4Component } from './task4/task4.component';
import { CarComponent } from './task4/car/car.component';
import { AirplaneComponent } from './task4/airplane/airplane.component';
import { ShipComponent } from './task4/ship/ship.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    CarComponent,
    AirplaneComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
