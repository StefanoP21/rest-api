import { type Request, type Response } from 'express';
import { CustomError } from '../../../core/custom.error';
import { OrderService } from '../services/order.service';
import { CreateOrderDto, UpdateOrderDto } from '../../domain';

export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    private handleError = (res: Response, error: unknown) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        return res.status(500).json({ error: 'Hable con el administrador' });
    };

    public createOrder = async (req: Request, res: Response) => {
        const [error, dto] = CreateOrderDto.create(req.body);
        if (error) return res.status(400).json({ error });

        this.orderService
            .create(dto!)
            .then((order) => res.status(201).json({ order }))
            .catch((err) => this.handleError(res, err));
    };

    public getOrder = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id)) {
            return res.status(400).json({
                error: 'El id debe ser numérico',
            });
        }

        this.orderService
            .findById(id)
            .then((order) => res.status(200).json({ order }))
            .catch((err) => this.handleError(res, err));
    };

    public updateOrder = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id)) {
            return res.status(400).json({
                error: 'El id debe ser numérico',
            });
        }

        const [error, dto] = UpdateOrderDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        this.orderService
            .updateById(dto!)
            .then((order) => res.status(200).json({ order }))
            .catch((err) => this.handleError(res, err));
    };

    public deleteOrder = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id)) {
            return res.status(400).json({
                error: 'El id debe ser numérico',
            });
        }

        this.orderService
            .deleteById(id)
            .then((order) => res.status(200).json({ order }))
            .catch((err) => this.handleError(res, err));
    };
}
