export class UpdateOrderDto {
    private constructor(
        public readonly id: number,
        public readonly status?: string
    ) {}

    get values() {
        const returnObject: Record<string, any> = {};

        if (this.status) returnObject.status = this.status;

        return returnObject;
    }

    static create(object: Record<string, any>): [string?, UpdateOrderDto?] {
        const { status } = object;

        if (
            status !== 'PENDIENTE' ||
            status !== 'ENVIADO' ||
            status !== 'ENTREGADO'
        ) {
            return [
                'El estado de una orden solo puede ser PENDIENTE, ENVIADO o ENTREGADO',
            ];
        }

        return [undefined, new UpdateOrderDto(status)];
    }
}
