export class UpdateClientDto {
    private constructor(
        public readonly id: number,
        public readonly phone?: string,
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

        return [undefined, new UpdateClientDto(id, phone, address)];
    }
}
