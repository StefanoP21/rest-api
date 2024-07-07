export class UpdateProductDto {
    private constructor(
        public readonly id: number,
        public readonly price?: number,
        public readonly stock?: number
    ) {}

    static create(object: Record<string, any>): [string?, UpdateProductDto?] {
        const { id, price, stock } = object;

        return [undefined, new UpdateProductDto(id, price, stock)];
    }
}
