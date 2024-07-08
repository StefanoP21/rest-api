export class CreateOrderDto {
    private constructor(
        public readonly amount: number,
        public readonly total: number,
        public readonly clientId: number,
        public readonly productId: number,
        public readonly status?: string
    ) {}

    static create(object: Record<string, any>): [string?, CreateOrderDto?] {
        const { amount, total, status, clientId, productId } = object;

        if (!amount || amount.length === 0)
            return ['La cantidad es obligatoria'];
        if (typeof amount !== 'number')
            return ['La cantidad debe ser numérica'];
        if (!total || total.length === 0)
            return ['El total de la orden es obligatoria'];
        if (typeof total !== 'number') return ['El total debe ser numérico'];
        if (!clientId || clientId.length === 0)
            return ['El código del cliente es obligatorio'];
        if (typeof clientId !== 'number')
            return ['El código del cliente debe ser numérico'];
        if (!productId || productId.length === 0)
            return ['El código del producto es obligatorio'];
        if (typeof productId !== 'number')
            return ['El código del producto debe ser numérico'];
        if (
            status !== 'PENDIENTE' ||
            status !== 'ENVIADO' ||
            status !== 'ENTREGADO'
        ) {
            return [
                'El estado de una orden solo puede ser PENDIENTE, ENVIADO o ENTREGADO',
            ];
        }

        return [
            undefined,
            new CreateOrderDto(amount, total, clientId, productId, status),
        ];
    }
}
