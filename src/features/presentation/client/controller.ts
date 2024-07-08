import { type Request, type Response } from 'express';
import { CustomError } from '../../../core/custom.error';
import { ClienteService } from '../services/client.service';
import { CreateClientDto, UpdateClientDto } from '../../domain';

export class CategoryController {
    constructor(private readonly clientService: ClienteService) {}

    private handleError = (res: Response, error: unknown) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        return res.status(500).json({ error: 'Hable con el administrador' });
    };

    public createClient = async (req: Request, res: Response) => {
        const [error, dto] = CreateClientDto.create(req.body);
        if (error) return res.status(400).json({ error });

        this.clientService
            .create(dto!)
            .then((client) => res.status(201).json({ client }))
            .catch((err) => this.handleError(res, err));
    };

    public getClient = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id)) {
            return res.status(400).json({
                error: 'El id debe ser numérico',
            });
        }

        this.clientService
            .findById(id)
            .then((client) => res.status(200).json({ client }))
            .catch((err) => this.handleError(res, err));
    };

    public updateClient = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id)) {
            return res.status(400).json({
                error: 'El id debe ser numérico',
            });
        }

        const [error, dto] = UpdateClientDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        this.clientService
            .updateById(dto!)
            .then((client) => res.status(200).json({ client }))
            .catch((err) => this.handleError(res, err));
    };

    public deleteClient = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id)) {
            return res.status(400).json({
                error: 'El id debe ser numérico',
            });
        }

        this.clientService
            .deleteById(id)
            .then((client) => res.status(200).json({ client }))
            .catch((err) => this.handleError(res, err));
    };
}
