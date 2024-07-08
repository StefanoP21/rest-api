import { CustomError } from '../../../core/custom.error';
import { prisma } from '../../../data/postgresql';
import { CreateClientDto, UpdateClientDto } from '../../domain';

export class ClienteService {
    constructor() {}

    async create(dto: CreateClientDto) {
        const clientExist = await prisma.client.findFirst({
            where: { email: dto.email },
        });

        if (clientExist)
            throw CustomError.badRequest('El cliente esta registrado');

        try {
            const newClient = await prisma.client.create({ data: dto });

            return newClient;
        } catch (error) {
            console.log(error);
            throw CustomError.internalServerError('Hable con el administador');
        }
    }

    async findById(id: number) {
        const client = await prisma.client.findFirst({ where: { id } });

        if (!client) throw CustomError.badRequest('Cliente no encontrado');

        return client;
    }

    async updateById(dto: UpdateClientDto) {
        await this.findById(dto.id);

        try {
            const updatedClient = await prisma.client.update({
                where: { id: dto.id },
                data: dto.values,
            });

            return updatedClient;
        } catch (error) {
            console.log(error);
            throw CustomError.internalServerError('Hable con el administador');
        }
    }

    async deleteById(id: number) {
        await this.findById(id);

        try {
            const deletedClient = await prisma.client.delete({
                where: { id },
            });

            return deletedClient;
        } catch (error) {
            throw CustomError.internalServerError('Hable con el administador');
        }
    }
}
