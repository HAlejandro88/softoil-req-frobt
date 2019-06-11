import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  customPickerOptions;
  customDate;

  constructor() {}

  ngOnInit() {
    this.customPickerOptions = {
      buttons:[{
        text: 'Save',
        handler: (evento)=> {
          console.log('clicked save');
          console.log(evento);
          
        }
      
    },    
    {
    text: 'log',
    handler: ()=>{
      console.log('clicked log');
      return false;
      
    }
  }]
  };
}

}
