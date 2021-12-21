import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { Categoria } from 'src/app/models/categoria';
import { UnidadMedida } from 'src/app/models/unidadMedida';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  tipo_articulo:  any[]= ['Producto','Materia Prima'];
  categoria: Categoria[] = new Array<Categoria>();
  unidad_medida: UnidadMedida[] = new Array<UnidadMedida>();
  form1: FormGroup;

  //articulo: Articulo | undefined;

  constructor(private fb: FormBuilder,
              private _productoService: ProductoService,
              private router: Router,
              private _snackBar:MatSnackBar) 
              {
    this.form1 = this.fb.group({
      nombre: ['', Validators.required],
      tipo_de_articulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      stock: ['', Validators.required],
      stock_minimo: ['', Validators.required], 
      unidad_de_medida: ['', Validators.required],
      precio_de_venta: ['', Validators.required],
    })
   }

   agregarArticulo(){
 
      const articulo: Articulo = {
       nombre:  this.form1.value.nombre,
       descripcion: this.form1.value.descripcion,
       stock: Number( this.form1.value.stock),
       stockMinimo: Number(this.form1.value.stock_minimo),
       precioUnitario: Number(this.form1.value.precio_de_venta),
       precioVenta: Number(this.form1.value.precio_de_venta),
       fechaIngreso: new Date(),
       tipo: this.form1.value.tipo_de_articulo,
       categoriaId: Number(this.form1.value.categoria.id),
       unidadMedidaId: Number( this.form1.value.unidad_de_medida.id),
       sectorId: Number(2)
     }
     console.log(articulo);

     this._productoService.agregarProducto(articulo).subscribe((data) => {
       console.log("se guardo");
     },error => {
       console.log(error);
       this.form1.reset();
     });

     this.router.navigate(['/dashboard/inventario']);
     this._snackBar.open('El producto fue agregado con exito','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
   }

  ngOnInit(): void {
    this._productoService.listadoCategoria().subscribe((listadoCat) =>{
      this.categoria = listadoCat;
    })
    this._productoService.listadoUnidadMedida().subscribe((listadoCat) =>{
      this.unidad_medida = listadoCat;
    })
  }

}
