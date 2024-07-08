import { CustomError } from '../../../core/custom.error';
import { prisma } from '../../../data/postgresql';
import { CreateProductDto, UpdateProductDto } from '../../domain';

export class ProductService {
    constructor() {}

    async create(dto: CreateProductDto) {
        const productExist = await prisma.product.findFirst({
            where: { name: dto.name },
        });

        if (productExist) throw CustomError.badRequest('El producto ya existe');

        try {
            const newProduct = await prisma.product.create({ data: dto });

            return newProduct;
        } catch (error) {
            throw CustomError.internalServerError('Hable con el administrador');
        }
    }

    async findById(id: number) {
        const product = await prisma.product.findFirst({ where: { id } });

        if (!product) throw CustomError.badRequest('Producto no encontrado');

        return product;
    }

    async updateById(dto: UpdateProductDto) {
        await this.findById(dto.id);

        try {
            const updatedProduct = await prisma.product.update({
                where: { id: dto.id },
                data: dto.values,
            });

            return updatedProduct;
        } catch (error) {
            throw CustomError.internalServerError('Hable con el administrador');
        }
    }

    async deleteById(id: number) {
        await this.findById(id);

        try {
            const deletedProduct = await prisma.product.delete({
                where: { id },
            });

            return deletedProduct;
        } catch (error) {
            throw CustomError.internalServerError('Hable con el administrador');
        }
    }
}
