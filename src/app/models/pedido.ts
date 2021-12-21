export interface Pedido{
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