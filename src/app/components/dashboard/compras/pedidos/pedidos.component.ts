import { AfterViewInit, Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Vendedor } from 'src/app/interfaces/vendedor';
import { Pedido } from 'src/app/interfaces/pedido';
import { Articulo } from 'src/app/models/articulo';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Cliente } from 'src/app/interfaces/cliente';
import { EstadoPedido } from 'src/app/interfaces/estadoPedido';



  interface Transaction {
    nombre: string;
    cantidad: number;
    precio: number;
  }

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})


export class PedidosComponent implements OnInit, AfterViewInit {

  listArticulo: Articulo[] = new Array<Articulo>();
  listVendedor: Vendedor[] = new Array<Vendedor>();
  listCliente: Cliente[] = new Array<Cliente>();
  listEstadoPedido: EstadoPedido[] = new Array<EstadoPedido>();

  displayedColumns: string[] = ['nombre','cantidad','precio'];



  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.precio).reduce((acc, value) => acc + value, 0);
  }
  getTotalCant() {
    return this.transactions.map(t => t.cantidad).reduce((acc, value) => acc + value, 0);
  }

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private _pedidoService: PedidoService,
              private router: Router,
              private _snackBar:MatSnackBar,
              private _productoService: ProductoService,
              private _usuarioService: UsuarioService){

    this.form = this.fb.group({
      nombreCliente: ['', Validators.required],
      descripcion: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      fechaEntrega: ['', Validators.required],
      estado: ['', Validators.required],
      nombreProducto: ['', Validators.required]
    })
   }
  ngAfterViewInit(): void {
    this._productoService.getProducto().subscribe((listadoProd) =>{
      this.listArticulo = listadoProd;
  })
    this._usuarioService.listUsuarios().subscribe((listadoUsuario) =>{
      this.listVendedor = listadoUsuario;})

      const transactions: Transaction[] = [
        {nombre: this.form.value.nombreProducto , cantidad: 0, precio: 0}
      ];

      this._pedidoService.listadoCliente().subscribe((cliente) =>{
        this.listCliente = cliente;
    })

    this._pedidoService.listadoEstadoPedido().subscribe((estado) =>{
      this.listEstadoPedido = estado;
  })
  }
   transactions: Transaction[] = new Array<Transaction>(); 

  
  /*export interface Pedido{
    id?: number,
    descripcion: string,
    cantidad: number,
    fechaEntrega: string,
    usuarioId: number,
    estadoId: number,
    estadoPedido: string,
    fechaRegistro: string,
    clienteId: number,
    cliente: string,
    usuario: string,
}
  */

   agregarPedido(){
     const pedido : Pedido = {
       descripcion: this.form.value.descripcion,
       cantidad: this.form.value.cantidad,
       clienteId: Number(this.form.value.nombreCliente.id),
       usuarioId:Number(this.form.value.nombreUsuario.id),
       fechaEntrega: this.form.value.fechaEntrega,
       estadoPedidoId: Number(this.form.value.estado.id),
       fechaRegistro: '2021-12-16',
     }   
     this.transactions.map(x => x.nombre = this.form.value.nombreProducto);
     this.transactions.map(x => x.cantidad = 1);
     this.transactions.map(x => x.precio = this.form.value.nombreProducto.precio);

     this._pedidoService.agregarPedido(pedido).subscribe((data) =>{
     },error => {
       console.log(error);
       this.form.reset();
      });
     this.router.navigate(['/dashboard/compras']);
     this._snackBar.open('El pedido fue agregado con exito','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
   }


  ngOnInit(): void {

  }
} 