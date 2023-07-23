import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {
  showCarInfo = false;
  showAirplaneInfo = false;
  showShipInfo = false;

  showCar() {
    this.showCarInfo = true;
    this.showAirplaneInfo = false;
    this.showShipInfo = false;
  }

  showAirplane() {
    this.showCarInfo = false;
    this.showAirplaneInfo = true;
    this.showShipInfo = false;
  }

  showShip() {
    this.showCarInfo = false;
    this.showAirplaneInfo = false;
    this.showShipInfo = true;
  }
}
