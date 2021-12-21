import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myAppUrl : string;
  myApiUrl : string;


  constructor(private http: HttpClient) { 
    this.myAppUrl = 'http://localhost:5000';
    this.myApiUrl = '/api/Login';
  }

  login(usuario: Usuario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl , usuario);
  }

  setLocalStorage(data: string): void{
    localStorage.setItem('nombreUsuario', data);
  }

  getNombreUsuario(): any {
   return localStorage.getItem('nombreUsuario');
  }

  removeLocalStorage(): void{
    localStorage.removeItem('nombreUsuario');
  }
}
