import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
public info: string ='';
public idprod:string = '';
public precio: string ='';
public tituloo: string ='';
  constructor( private rutadetalle:ActivatedRoute) { }

  ngOnInit() {
  }
ionicViewWillEnter(){
this.rutadetalle.params.subscribe(parametro =>{this.tituloo = parametro['titulo']||'';});
  this.rutadetalle.queryParams.subscribe(parametros=>{
    this.idprod = parametros['id']||'no id',
    this.precio = parametros ['precio']||'no precio',
    this.info = parametros ['info']||'no info';
  });
  console.log(this.idprod)
}
}
