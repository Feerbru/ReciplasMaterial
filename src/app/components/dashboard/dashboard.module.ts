import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { InventarioComponent } from './inventario/inventario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComprasComponent } from './compras/compras.component';
import { ReporteComponent } from './reporte/reporte.component';
import { CrearProductoComponent } from './inventario/crear-producto/crear-producto.component';
import { ProductoComponent } from './inventario/producto/producto.component';
import { MateriaPrimaComponent } from './inventario/materia-prima/materia-prima.component';
import { PedidosComponent } from './compras/pedidos/pedidos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    InventarioComponent,
    NavbarComponent,
    ComprasComponent,
    ReporteComponent,
    CrearProductoComponent,
    ProductoComponent,
    MateriaPrimaComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
