export class UpdateProductDto {
    private constructor(
        public readonly id: number,
        public readonly price?: number,
        public readonly stock?: number
    ) {}

    get values() {
        const returnObject: Record<string, any> = {};

        if (this.price) returnObject.price = this.price;
        if (this.stock) returnObject.stock = this.stock;

        return returnObject;
    }

    static create(object: Record<string, any>): [string?, UpdateProductDto?] {
        const { id, price, stock } = object;

        return [undefined, new UpdateProductDto(id, price, stock)];
    }
}
