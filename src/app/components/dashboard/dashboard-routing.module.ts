import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { PedidosComponent } from './compras/pedidos/pedidos.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearProductoComponent } from './inventario/crear-producto/crear-producto.component';
import { InventarioComponent } from './inventario/inventario.component';
import { MateriaPrimaComponent } from './inventario/materia-prima/materia-prima.component';
import { ProductoComponent } from './inventario/producto/producto.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: 'compras', component: ComprasComponent },
    { path: 'reportes', component: ReporteComponent },
    { path: 'crear-producto', component: CrearProductoComponent },
    { path: 'producto', component: ProductoComponent},
    { path: 'materia-prima', component: MateriaPrimaComponent},
    { path: 'pedidos', component: PedidosComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
