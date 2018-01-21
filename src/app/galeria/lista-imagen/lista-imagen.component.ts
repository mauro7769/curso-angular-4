import { Component, OnInit, Input } from '@angular/core';
import { Imagen } from '../../modelos/imagen';
import {ImagenService} from '../../servicios/imagen.service';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-lista-imagen',
  templateUrl: './lista-imagen.component.html',
  styleUrls: ['./lista-imagen.component.css']
})
export class ListaImagenComponent implements OnInit {

  imagenes: Observable<Imagen[]>;
  imagenSeleccionada:Imagen;

  constructor(private imagenService:ImagenService) { }

  ngOnInit() {
    this.imagenes=this.imagenService.getImagenes();
  }

  onSelect(imagen:Imagen){
  	this.imagenSeleccionada=imagen;
  }

}
