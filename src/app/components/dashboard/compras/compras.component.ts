import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Pedido } from 'src/app/interfaces/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  listPedidos : Pedido[] = [];

  displayedColumns: string[] = ['id','clienteId','clienteNombre','usuarioId','usuarioNombre','estadoNombre','fechaEntrega','acciones'];
  dataSource! : MatTableDataSource<Pedido>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _pedidoService: PedidoService, private _snackBar:MatSnackBar ) { }

  ngOnInit(): void {
    this.cargarPedidos();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarPedidos(){
    this._pedidoService.getPedido().subscribe((pedido) =>{
      this.listPedidos = pedido;
      this.dataSource = new MatTableDataSource<Pedido>(pedido);
    })
    
  }

  eliminarPedido(articuloId: number, indice: number){
    this._pedidoService.eliminarPedido(articuloId).subscribe(() =>{
      this.listPedidos.splice(indice, 1);
    });
    this.cargarPedidos();

    this._snackBar.open('El pedido fue eliminado con exito','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
