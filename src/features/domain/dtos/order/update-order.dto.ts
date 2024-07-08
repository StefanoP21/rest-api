import { $Enums } from '@prisma/client';

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
        const { id, status } = object;

        if (
            status !== $Enums.StatusLevel.PENDIENTE &&
            status !== $Enums.StatusLevel.ENVIADO &&
            status !== $Enums.StatusLevel.ENTREGADO
        ) {
            return [
                'El estado de una orden solo puede ser PENDIENTE, ENVIADO o ENTREGADO',
            ];
        }

        return [undefined, new UpdateOrderDto(id, status)];
    }
}
