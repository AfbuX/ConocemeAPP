import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class inventarioService {

  apiBase = '';

  constructor(private _http: HttpClient) {
    this.apiBase = environment.urlApiBase + 'inventario';
  }

  getProducto(): Observable<Producto[]> {
    return this._http.get<Producto[]>(this.apiBase);
  }



  postProducto(Producto: Producto): Observable<Producto> {
    return this._http.post<Producto>(this.apiBase, Producto);
  }

  putProducto(Producto: Producto): Observable<Producto> {
    return this._http.put<Producto>(this.apiBase, Producto);
  }

  deleteProducto(codigo: number): Observable<void> {
    return this._http.delete<void>(this.apiBase + '/' + codigo);
  }
}
