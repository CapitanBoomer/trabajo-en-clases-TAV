import { Component, OnInit } from '@angular/core';
import {AcuerdosServService} from './../servicio/acurdos/acuerdos-serv.service'
@Component({
  selector: 'app-acuerdo',
  templateUrl: './acuerdo.page.html',
  styleUrls: ['./acuerdo.page.scss'],
})
export class AcuerdoPage implements OnInit {

  constructor( public acuerdo:AcuerdosServService) { }

  ngOnInit() {

  }

}
