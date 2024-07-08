export class UpdateClientDto {
    private constructor(
        public readonly id: number,
        public readonly phone?: number,
        public readonly address?: string
    ) {}

    get values() {
        const returnObject: Record<string, any> = {};

        if (this.phone) returnObject.phone = this.phone;
        if (this.address) returnObject.address = this.address;

        return returnObject;
    }

    static create(object: Record<string, any>): [string?, UpdateClientDto?] {
        const { id, phone, address } = object;

        if (typeof phone !== 'number') return ['El precio debe ser numérico'];

        return [undefined, new UpdateClientDto(id, phone, address)];
    }
}
