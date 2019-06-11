import { Component } from '@angular/core';
import { Req01Service } from 'src/app/services/req01.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  req01 = {
    departamentoSolicitante: '',
    nombreSolicitante: '',
    productoSolicitado: '',
    cantidad: 1
  }

  constructor(private req01Service: Req01Service) {}

  ngOnInit() {}

  onSubmitTemplate() {
    this.req01Service.createReq01(this.req01).subscribe((data:any) => {
      console.log(data);
    })
  }

}
