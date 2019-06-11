import { Component, OnInit } from '@angular/core';
import { Req02Service } from 'src/app/services/req02.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  req02 ={
    empresa: '',
    departamentoSolicitante: '',
    quienSolicita: '',
    marca: '',
    modelo: '',
    serie: '',
    contrasenaEquipo: '',
    falla: ''
  }

  constructor(private req02Service: Req02Service) { }

  ngOnInit() {
  }

  onSumitReparacion(){
    this.req02Service.createReq02(this.req02).subscribe((data:any)=>{
      console.log(data);
    })
  }

}
