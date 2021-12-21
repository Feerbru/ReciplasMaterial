import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendedor } from '../interfaces/vendedor';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  myAppUrl : string;
  myApiUrl : string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = 'http://localhost:5000';
    this.myApiUrl = "/api/Usuario";
  }


  saveUser(usuario : Usuario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }
  listUsuarios() : Observable<Vendedor[]>{
    return this.http.get<Vendedor[]>(this.myAppUrl + this.myApiUrl + "/listadoUsuario" );
  }
}
