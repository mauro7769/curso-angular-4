import { Injectable } from '@angular/core';
import { Imagen } from '../modelos/imagen';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ImagenService {

  constructor(private http:Http) { }

  getImagenes(): Observable<Imagen[]>{
  	return this.http.get('http://127.0.0.1:8000/api/v1/imagen').map((response: Response) => response.json());
  }

  postImagen(imagen: Object): Observable<Imagen[]>{
  	return this.http.post('http://127.0.0.1:8000/api/v1/imagen',imagen).map((response: Response)=>response.json()).catch((error: any)=> Observable.throw(error.json().error || {message:"Error del servidor"}));
  }
}
 