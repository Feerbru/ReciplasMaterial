export interface Articulo{
    id?: number;
    nombre: string;
    descripcion: string;
    stock: number;
    stockMinimo : number;
    precioUnitario: number;
    precioVenta: number;
    fechaIngreso: Date;
    tipo: string;
    categoriaId: number;
    unidadMedidaId: number;
    sectorId: number;
}

export class Articulo{
    id?: number;
    nombre: string;
    descripcion: string;
    stock: number;
    stockMinimo : number;
    precioUnitario: number;
    precioVenta: number;
    tipo: string;
    categoriaId: number;
    unidadMedidaId: number;
    sectorId: number;
    

    constructor(datos? : Articulo){
        if(datos != null){
            this.id = datos.id;
            this.nombre= datos.nombre;
            this.descripcion= datos.descripcion;
            this.stock= datos.stock;
            this.stockMinimo = datos.stockMinimo;
            this.precioUnitario = datos.precioUnitario;
            this.precioVenta= datos.precioVenta;
            this.tipo= datos.tipo;
            this.categoriaId= datos.categoriaId;
            this.unidadMedidaId= datos.unidadMedidaId;
            this.sectorId= datos.sectorId;
            return
        }
        this.id = this.id;
        this.nombre= this.nombre;
        this.descripcion= this.descripcion;
        this.stock= this.stock;
        this.stockMinimo = this.stockMinimo;
        this.precioUnitario = this.precioUnitario;
        this.precioVenta= this.precioVenta;
        this.tipo= this.tipo;
        this.categoriaId= this.categoriaId;
        this.unidadMedidaId= this.unidadMedidaId;
        this.sectorId= this.sectorId;
        
    }
}