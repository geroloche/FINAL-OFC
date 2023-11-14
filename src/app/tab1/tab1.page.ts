import { Component } from '@angular/core';
import { Aplicaciones } from '../core/interfaces/aplicaciones';
import { APLICACIONES } from '../core/constantes/aplicaciones';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  aplicaciones: Aplicaciones[] = APLICACIONES;

  constructor(private navCtrl: NavController) {}

  navegarAPagina() {
    this.navCtrl.navigateForward('/descargar-app');
  }
}
