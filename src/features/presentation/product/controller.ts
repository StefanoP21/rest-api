import { type Request, type Response } from 'express';
import { CustomError } from '../../../core/custom.error';
import { ProductService } from '../services/product.service';
import { CreateProductDto, UpdateProductDto } from '../../domain';

export class ProductController {
    constructor(private readonly productService: ProductService) {}

    private handleError = (res: Response, error: unknown) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        return res.status(500).json({ error: 'Hable con el administrador' });
    };

    public createProduct = async (req: Request, res: Response) => {
        const [error, dto] = CreateProductDto.create(req.body);
        if (error) return res.status(400).json({ error });

        this.productService
            .create(dto!)
            .then((product) => res.status(201).json({ product }))
            .catch((err) => this.handleError(res, err));
    };

    public getProduct = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id)) {
            return res.status(400).json({
                error: 'El id debe ser numérico',
            });
        }

        this.productService
            .findById(id)
            .then((products) => res.status(200).json({ products }))
            .catch((err) => this.handleError(res, err));
    };

    public updateProduct = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id)) {
            return res.status(400).json({
                error: 'El id debe ser numérico',
            });
        }

        const [error, dto] = UpdateProductDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        this.productService
            .updateById(dto!)
            .then((product) => res.status(200).json({ product }))
            .catch((err) => this.handleError(res, err));
    };

    public deleteProduct = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id)) {
            return res.status(400).json({
                error: 'El id debe ser numérico',
            });
        }

        this.productService
            .deleteById(id)
            .then((product) => res.status(200).json({ product }))
            .catch((err) => this.handleError(res, err));
    };
}
