import { Component } from '@angular/core';
import { Aplicaciones } from '../core/interfaces/aplicaciones';
import { APLICACIONES } from '../core/constantes/aplicaciones';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  aplicaciones:Aplicaciones[] = APLICACIONES

  constructor() { 




    
  }
  appRecomendada: Aplicaciones | undefined;
  mostrarDiv: boolean = false;
  botonClicadoMg: boolean = false
  botonNoSeVe:boolean = false

  obtenerRecomendacionAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * this.aplicaciones.length);
    this.appRecomendada = this.aplicaciones[indiceAleatorio];
  
  
   

    
      this.mostrarDiv = !this.mostrarDiv;
     
    
  }

  apretarBotonMg() {
    if (this.mostrarDiv) {
      this.botonClicadoMg = !this.botonClicadoMg;
    }
  }

}
