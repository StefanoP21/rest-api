import { CustomError } from '../../../core/custom.error';
import { prisma } from '../../../data/postgresql';
import { CreateOrderDto, UpdateOrderDto } from '../../domain';

export class OrderService {
    constructor() {}

    async create(dto: CreateOrderDto) {
        try {
            const newOrder = await prisma.order.create({ data: dto });

            return newOrder;
        } catch (error) {
            throw CustomError.internalServerError('Hable con el administrador');
        }
    }

    async findById(id: number) {
        const order = await prisma.order.findFirst({ where: { id } });

        if (!order) throw CustomError.badRequest('Orden no encontrada');

        return order;
    }

    async updateById(dto: UpdateOrderDto) {
        await this.findById(dto.id);

        try {
            const updatedOrder = await prisma.order.update({
                where: { id: dto.id },
                data: dto.values,
            });

            return updatedOrder;
        } catch (error) {
            throw CustomError.internalServerError('Hable con el administrador');
        }
    }

    async deleteById(id: number) {
        await this.findById(id);

        try {
            const deletedOrder = await prisma.order.delete({
                where: { id },
            });

            return deletedOrder;
        } catch (error) {
            throw CustomError.internalServerError('Hable con el administrador');
        }
    }
}
