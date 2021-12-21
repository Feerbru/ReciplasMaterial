import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProductoService } from 'src/app/services/producto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Articulo } from 'src/app/models/articulo';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit, AfterViewInit {


  listArticulos : Articulo[] = [];

  displayedColumns: string[] = ['id','nombre','descripcion','categoria','stock','unidadMedida','precio','acciones'];
  dataSource!: MatTableDataSource<Articulo>;
  //dataSource:any = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;

  constructor(private _productoService: ProductoService, private _snackBar:MatSnackBar) {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator= this.paginator;
  }

  ngOnInit(): void {
    
    this.cargarProductos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarProductos(){
    this._productoService.getProducto().subscribe((producto) =>{
      this.listArticulos = producto;
      this.dataSource = new MatTableDataSource(this.listArticulos); 
    })
  }

  eliminarProducto(articuloId: number, indice: number){
    this._productoService.eliminarProducto(articuloId).subscribe(() =>{
      this.listArticulos.splice(indice, 1);   
    });
    this.cargarProductos(); 
    this._snackBar.open('El producto fue eliminado con exito','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })

  }

}

