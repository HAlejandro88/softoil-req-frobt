import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DesarrolloSoftwarePage } from './desarrollo-software.page';

const routes: Routes = [
  {
    path: '',
    component: DesarrolloSoftwarePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DesarrolloSoftwarePage]
})
export class DesarrolloSoftwarePageModule {}
