export class UpdateClientDto {
    private constructor(
        public readonly id: number,
        public readonly phone?: number,
        public readonly addres?: string
    ) {}

    static create(object: Record<string, any>): [string?, UpdateClientDto?] {
        const { id, phone, address } = object;

        return [undefined, new UpdateClientDto(id, phone, address)];
    }
}
