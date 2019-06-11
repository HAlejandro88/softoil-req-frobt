import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DesarrolloAnimacionesPage } from './desarrollo-animaciones.page';

const routes: Routes = [
  {
    path: '',
    component: DesarrolloAnimacionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DesarrolloAnimacionesPage]
})
export class DesarrolloAnimacionesPageModule {}
