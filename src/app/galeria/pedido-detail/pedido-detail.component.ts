import { Component, OnInit, Input } from '@angular/core';
import { Imagen } from '../../modelos/imagen';

@Component({
  selector: 'app-pedido-detail',
  templateUrl: './pedido-detail.component.html',
  styleUrls: ['./pedido-detail.component.css']
})
export class PedidoDetailComponent implements OnInit {
  @Input() imagenSeleccionada:Imagen;
  constructor() { }

  ngOnInit() {
  }

}
