import {Routes, RouterModule} from '@angular/router';
import { AdminImagenListComponent } from './admin-imagen-list/admin-imagen-list.component';
import { DashboardComponent } from './dashboard.component';
import { AdminImagenCreateComponent } from '../admin-imagen-create/admin-imagen-create.component';

export const adminRoutes: Routes=[
  {path: '', component: DashboardComponent},
  {path: 'imagen', component: AdminImagenListComponent},
  {path: 'imagen/create', component: AdminImagenCreateComponent}
];