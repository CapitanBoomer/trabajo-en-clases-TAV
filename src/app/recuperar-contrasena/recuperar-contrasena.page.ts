import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {

  constructor(private alertController: AlertController) {}

  async alerta() {
    const alert = await this.alertController.create({

      header: 'Si los datos coinciden recibirás tu correo',
      buttons: ['Ok!'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
