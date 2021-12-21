import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo } from '../models/articulo';
import { Categoria } from '../models/categoria';
import { UnidadMedida } from '../models/unidadMedida';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  myAppUrl : string;
  myApiUrl : string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:5000';
    this.myApiUrl = '/api/Articulo';
   }

   /*verProducto(): Observable<Articulo[]>{
     return this.http.get<Articulo[]>(this.myAppUrl + this.myApiUrl );
   }*/

  getProducto(): Observable<Articulo[]>{
    return this.http.get<Articulo[]>(this.myAppUrl + this.myApiUrl );
  }

  eliminarProducto(articuloId: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + "/" + articuloId );
  }

  agregarProducto(articulo: Articulo) : Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, articulo);
  }


  listadoCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.myAppUrl + this.myApiUrl + "/listadoCategoria" );
  }

  listadoUnidadMedida(): Observable<UnidadMedida[]>{
    return this.http.get<Categoria[]>(this.myAppUrl + this.myApiUrl + "/ListadoUnidadM" );
  }
}
