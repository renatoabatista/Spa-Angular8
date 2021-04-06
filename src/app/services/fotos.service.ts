import { Foto } from './../models/foto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(private http: HttpClient) { }

  public getFotos(limite: number = 10): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limite}`)
  }
}
