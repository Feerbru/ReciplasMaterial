import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/cliente';
import { EstadoPedido } from '../interfaces/estadoPedido';
import { Pedido } from '../interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  myAppUrl : string;
  myApiUrl : string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = 'http://localhost:5000';
    this.myApiUrl = '/api/Pedido';
  }

  getPedido() : Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.myAppUrl + this.myApiUrl );
  }

  eliminarPedido(pedidoId: number){
    return this.http.delete(this.myAppUrl + this.myApiUrl + "/" + pedidoId );
  }

  agregarPedido(pedido: Pedido) : Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, pedido);
  }
  listadoCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.myAppUrl + this.myApiUrl + "/ListadoClientes")
  }
  listadoEstadoPedido(): Observable<EstadoPedido[]>{
    return this.http.get<EstadoPedido[]>(this.myAppUrl + this.myApiUrl + "/ListadoEstado");
  }

}
