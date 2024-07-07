export class UpdateCategoryDto {
    private constructor(
        public readonly id: number,
        public readonly name?: string,
        public readonly description?: string
    ) {}

    static create(object: Record<string, any>): [string?, UpdateCategoryDto?] {
        const { id, name, description } = object;

        return [undefined, new UpdateCategoryDto(id, name, description)];
    }
}
