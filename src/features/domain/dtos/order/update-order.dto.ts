export class UpdateOrderDto {
    private constructor(
        public readonly id: number,
        public readonly status?: string
    ) {}

    static create(object: Record<string, any>): [string?, UpdateOrderDto?] {
        const { status } = object;

        return [undefined, new UpdateOrderDto(status)];
    }
}
