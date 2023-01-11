import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcuerdosServService {
public opcion: boolean =false;
  constructor() { }

public aceptar(){
  this.opcion =true;
  window.localStorage.setItem('acuerdo','si')
};

public negar(){
  this.opcion = false;
  window.localStorage.removeItem('acuerdo')
};

public respuest(){
  return window.localStorage.getItem('acuerdo')?true:false;
}
}
