import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImagenService } from './servicios/imagen.service'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ListaImagenComponent } from './galeria/lista-imagen/lista-imagen.component';
import { ImagenComponent } from './galeria/lista-imagen/imagen.component';
import { PedidoDetailComponent } from './galeria/pedido-detail/pedido-detail.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { AdminComponent } from './admin/admin.component';
import { AdminImagenListComponent } from './admin/admin-imagen-list/admin-imagen-list.component';
import { DashboardComponent } from './admin/dashboard.component';
import { AdminImagenCreateComponent } from './admin-imagen-create/admin-imagen-create.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GaleriaComponent,
    ListaImagenComponent,
    ImagenComponent,
    PedidoDetailComponent,
    QuienesSomosComponent,
    SolicitudesComponent,
    AdminComponent,
    AdminImagenListComponent,
    DashboardComponent,
    AdminImagenCreateComponent
  ],
  imports: [
    routes,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ImagenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
