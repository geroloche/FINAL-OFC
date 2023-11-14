import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aplicaciones } from 'src/app/core/interfaces/aplicaciones';
import { AppService } from 'src/app/core/services/app.service';


@Component({
  selector: 'app-descargar-app',
  templateUrl: './descargar-app.page.html',
  styleUrls: ['./descargar-app.page.scss'],
})
export class DescargarAppPage implements OnInit {
 

  router = inject(Router)
 

  constructor(private activatedRouted:ActivatedRoute, private appService:AppService ) {

    activatedRouted.params.subscribe(params => {console.log(params)})
   }

  ngOnInit() {
  }

  aplicaciones: Aplicaciones = {
    id:0,
    nombre:"",
    imagen:"",
    tipo:"",
    link:"",
    descripcion:"",
    
    

  }
}
