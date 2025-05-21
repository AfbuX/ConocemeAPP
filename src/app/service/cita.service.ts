import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../models/cita';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class citaService {

  apiBase = '';

  constructor(private _http: HttpClient) {
    this.apiBase = environment.urlApiBase + 'cita';
  }

  getCita(): Observable<Cita[]> {
    return this._http.get<Cita[]>(this.apiBase);
  }



  postCita(cita: Cita): Observable<Cita> {
    return this._http.post<Cita>(this.apiBase, cita);
  }

  putCita(cita: Cita): Observable<Cita> {
    return this._http.put<Cita>(this.apiBase, cita);
  }

  deleteCita(id: number): Observable<void> {
    return this._http.delete<void>(this.apiBase + '/' + id);
  }
}
