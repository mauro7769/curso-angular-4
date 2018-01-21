import { Component, OnInit } from '@angular/core';
import {ImagenService} from '../servicios/imagen.service';


@Component({
  selector: 'app-admin-imagen-create',
  templateUrl: './admin-imagen-create.component.html',
  styleUrls: ['./admin-imagen-create.component.css']
})
export class AdminImagenCreateComponent implements OnInit {

  constructor(private imagenService: ImagenService) { }

  ngOnInit() {
  }

  createImagen(imagen){
  	console.log(imagen);
  	this.imagenService.postImagen(imagen).subscribe(imagen => console.log(imagen), error => console.log(<any>error));
  }
}
