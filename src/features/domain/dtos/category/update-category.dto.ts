export class UpdateCategoryDto {
    private constructor(
        public readonly id: number,
        public readonly name?: string,
        public readonly description?: string
    ) {}

    get values() {
        const returnObject: Record<string, any> = {};

        if (this.name) returnObject.name = this.name;
        if (this.description) returnObject.description = this.description;

        return returnObject;
    }

    static create(object: Record<string, any>): [string?, UpdateCategoryDto?] {
        const { id, name, description } = object;

        return [undefined, new UpdateCategoryDto(id, name, description)];
    }
}
