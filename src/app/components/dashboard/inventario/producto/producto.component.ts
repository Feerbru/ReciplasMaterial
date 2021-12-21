import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Articulo } from 'src/app/models/articulo';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  listArticulos : Articulo[] = [];
  listaProductoAux : Articulo[] = [];

  displayedColumns: string[] = ['codigo','nombre','descripcion','categoria','stock','unidad_de_medida','precio_venta','acciones'];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _productoService: ProductoService, private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.cargarProductos();
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarProductos(){
    this._productoService.getProducto().subscribe((producto) =>{

      for (let prod of producto){
        if(prod.tipo == 'Producto'){
          this.listaProductoAux.push(prod);
        }
      }

      this.listArticulos = this.listaProductoAux;
      this.dataSource = new MatTableDataSource(this.listArticulos);
      console.log(producto);
    })
    this.dataSource = new MatTableDataSource(this.listArticulos);
  }

  eliminarProducto(index: number){
    console.log(index);
    this._productoService.eliminarProducto(index);
    this.cargarProductos();

    this._snackBar.open('El producto fue eliminado con exito','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
