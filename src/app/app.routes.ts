import {Routes, RouterModule} from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { AdminComponent } from './admin/admin.component';
import { adminRoutes } from './admin/admin.routes';

import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes=[
  {path:'', redirectTo:'/galeria',pathMatch:'full'},
  {path:'galeria', component: GaleriaComponent},
  {path:'quienesSomos', component: QuienesSomosComponent},
  {path:'solicitudes', component: SolicitudesComponent},
  {path:'admin', component: AdminComponent, children: adminRoutes},
]

export const routes:ModuleWithProviders=RouterModule.forRoot(appRoutes);