import { Component, OnInit } from '@angular/core';
import { Req02Service } from 'src/app/services/req02.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  req02 ={
    empresa: '',
    departamentoSolicitante: '',
    nombreSolicitante: '',
    marca: '',
    modelo: '',
    serie: '',
    contrasenaEquipo: '',
    descripcionFallo: ''
  }

  constructor(private req02Service: Req02Service, private alertController: AlertController) { }

  ngOnInit() {
  }

  onSumitReparacion(){
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `<p>Empresa: <strong>${this.req02.empresa}</strong></p>
                <p>Departamento que lo Solicita: <strong>${this.req02.departamentoSolicitante}</strong></p>
                <p>Nombre del Solicitante : <strong>${this.req02.nombreSolicitante}</strong></p>
                <p>Marca: <strong>${this.req02.marca}</strong></p>
                <p>Modelo: <strong>${this.req02.modelo}</strong></p>
                <p>Serie: <strong>${this.req02.serie}</strong></p>
                <p>Contraseña del Equipo: <strong>${this.req02.contrasenaEquipo}</strong></p>
                <p>Falla: <strong>${this.req02.descripcionFallo}</strong></p>`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancelar');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.req02Service.createReq02(this.req02).subscribe((data:any)=>{
              console.log(data);
            })
          }
        }
      ]
    });

    await alert.present();
  }

}
