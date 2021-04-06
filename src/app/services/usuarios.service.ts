import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public getUsuarios(limite: number = 10): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users?_limit=${limite}`)
  }
}
