export class CreateCategoryDto {
    private constructor(
        public readonly name: string,
        public readonly description: string
    ) {}

    static create(object: Record<string, any>): [string?, CreateCategoryDto?] {
        const { name, description } = object;

        if (!name || name.length === 0) return ['El nombre es obligatorio'];
        if (!description || description.length === 0)
            return ['La descripción es obligatoria'];

        return [undefined, new CreateCategoryDto(name, description)];
    }
}
