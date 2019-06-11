import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  { path: 'instalacion', loadChildren: './pages/instalacion/instalacion.module#InstalacionPageModule' },
  { path: 'desarrollo-software', loadChildren: './pages/desarrollo-software/desarrollo-software.module#DesarrolloSoftwarePageModule' },
  { path: 'desarrollo-marketing', loadChildren: './pages/desarrollo-marketing/desarrollo-marketing.module#DesarrolloMarketingPageModule' },
  { path: 'desarrollo-animaciones', loadChildren: './pages/desarrollo-animaciones/desarrollo-animaciones.module#DesarrolloAnimacionesPageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
