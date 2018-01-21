import { Component, OnInit, Input } from '@angular/core';
import { Imagen } from '../../modelos/imagen';


@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  @Input() imagen: Imagen;
  constructor() { }

  ngOnInit() {
  }

}
