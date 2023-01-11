import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardianGuard } from './guardian.guard'
import { SkipacuerdoGuard } from './skipacuerdo.guard'
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [GuardianGuard]
  },
  {
    path: '',
    redirectTo: 'acuerdo',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then(m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoPageModule)
  },
  {
    path: 'detalle/:titulo',
    loadChildren: () => import('./detalle/detalle.module').then(m => m.DetallePageModule)
  },
  {
    path: 'acuerdo',
    loadChildren: () => import('./acuerdo/acuerdo.module').then(m => m.AcuerdoPageModule),
    canActivate:[SkipacuerdoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
