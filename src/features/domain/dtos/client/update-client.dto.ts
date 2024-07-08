export class UpdateClientDto {
    private constructor(
        public readonly id: number,
        public readonly phone?: number,
        public readonly addres?: string
    ) {}

    get values() {
        const returnObject: Record<string, any> = {};

        if (this.phone) returnObject.phone = this.phone;
        if (this.addres) returnObject.addres = this.addres;

        return returnObject;
    }

    static create(object: Record<string, any>): [string?, UpdateClientDto?] {
        const { id, phone, address } = object;

        return [undefined, new UpdateClientDto(id, phone, address)];
    }
}
