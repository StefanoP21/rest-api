export class CreateOrderDto {
    private constructor(
        public readonly amount: number,
        public readonly total: number,
        public readonly status: string,
        public readonly clientId: number,
        public readonly productId: number
    ) {}

    static create(object: Record<string, any>): [string?, CreateOrderDto?] {
        const { amount, total, status, clientId, productId } = object;

        if (!amount || amount.length === 0)
            return ['La cantidad es obligatoria'];
        if (!total || total.length === 0)
            return ['El total de la orden es obligatoria'];
        if (!status || status.length === 0)
            return ['El estado de la orden es obligatoria'];
        if (!clientId || clientId.length === 0)
            return ['El código del cliente es obligatorio'];
        if (!productId || productId.length === 0)
            return ['El código del prodcuto es obligatorio'];

        return [
            undefined,
            new CreateOrderDto(amount, total, status, clientId, productId),
        ];
    }
}
