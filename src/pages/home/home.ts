import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public cars=[];
  torneos = [];
  torneo =  null;
  constructor(public navCtrl: NavController) {
    this.torneos.push({name:"Torneo Estudiantes"});
    this.torneos.push({ name: "Torneo Maestros" });
    this.torneos.push({ name: "Torneo Libre" });
  }

}
