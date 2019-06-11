import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DesarrolloMarketingPage } from './desarrollo-marketing.page';

const routes: Routes = [
  {
    path: '',
    component: DesarrolloMarketingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DesarrolloMarketingPage]
})
export class DesarrolloMarketingPageModule {}
