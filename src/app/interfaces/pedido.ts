export interface Pedido{
    id?: number,
    descripcion: string,
    cantidad: number,
    fechaEntrega: string,
    usuarioId: number,
    estadoPedidoId: number,
    fechaRegistro: string,
    clienteId: number,
}