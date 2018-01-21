import { Component, OnInit } from '@angular/core';
import {Imagen} from '../../modelos/imagen';
import { Observable } from 'rxjs/Observable';
import  { ImagenService } from '../../servicios/imagen.service';




@Component({
  selector: 'app-admin-imagen-list',
  templateUrl: './admin-imagen-list.component.html',
  styleUrls: ['./admin-imagen-list.component.css']
})
export class AdminImagenListComponent implements OnInit {

  imagenes: Observable<Imagen[]>;

  constructor(private imagenService : ImagenService) { }

  ngOnInit() {
  	this.imagenes = this.imagenService.getImagenes();
  }

}
