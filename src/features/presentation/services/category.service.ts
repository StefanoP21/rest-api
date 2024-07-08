import { CustomError } from '../../../core/custom.error';
import { prisma } from '../../../data/postgresql';
import { CreateCategoryDto, UpdateCategoryDto } from '../../domain';

export class CategoryService {
    constructor() {}

    async create(dto: CreateCategoryDto) {
        const categoryExist = await prisma.category.findFirst({
            where: { name: dto.name },
        });

        if (categoryExist)
            throw CustomError.badRequest('La categoría ya existe');

        try {
            const newCategory = await prisma.category.create({ data: dto });

            return newCategory;
        } catch (error) {
            throw CustomError.internalServerError('Hable con el administador');
        }
    }

    async getAll() {
        const categories = await prisma.category.findMany();

        if (categories.length === 0)
            throw CustomError.notFound('No existen categorias');

        return categories;
    }

    private async findById(id: number) {
        const category = await prisma.category.findFirst({ where: { id } });

        if (!category) throw CustomError.badRequest('Categoria no encontrada');

        return category;
    }

    async updateById(dto: UpdateCategoryDto) {
        await this.findById(dto.id);

        try {
            const updatedCategory = await prisma.category.update({
                where: { id: dto.id },
                data: dto.values,
            });

            return updatedCategory;
        } catch (error) {
            throw CustomError.internalServerError('Hable con el administador');
        }
    }

    async deleteById(id: number) {
        await this.findById(id);

        try {
            const deletedCategory = await prisma.category.delete({
                where: { id },
            });

            return deletedCategory;
        } catch (error) {
            throw CustomError.internalServerError('Hable con el administador');
        }
    }
}
