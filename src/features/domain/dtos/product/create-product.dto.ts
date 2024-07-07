export class CreateProductDto {
    private constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly price: number,
        public readonly stock: number,
        public readonly categoryId: number
    ) {}

    static create(object: Record<string, any>): [string?, CreateProductDto?] {
        const { name, description, price, stock, categoryId } = object;

        if (!name || name.length === 0) return ['El nombre es obligatorio'];
        if (!description || description.length === 0)
            return ['La descripción es obligatoria'];
        if (!price || price.length === 0) return ['El precio es obligatorio'];
        if (!stock || stock.length === 0)
            return ['El stock del producto es obligatorio'];
        if (!categoryId || categoryId.length === 0)
            return ['El código de categoría es obligatorio'];

        return [
            undefined,
            new CreateProductDto(name, description, price, stock, categoryId),
        ];
    }
}
