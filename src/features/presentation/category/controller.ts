import { type Request, type Response } from 'express';
import { CustomError } from '../../../core/custom.error';
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../../domain';

export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    private handleError = (res: Response, error: unknown) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        return res.status(500).json({ error: 'Hable con el administrador' });
    };

    public createCategory = async (req: Request, res: Response) => {
        const [error, dto] = CreateCategoryDto.create(req.body);
        if (error) return res.status(400).json({ error });

        this.categoryService
            .create(dto!)
            .then((result) => res.status(201).json(result))
            .catch((err) => this.handleError(res, err));
    };

    public getCategories = async (_req: Request, res: Response) => {
        this.categoryService
            .getAll()
            .then((result) => res.status(200).json(result))
            .catch((err) => this.handleError(res, err));
    };

    public updateCategory = async (req: Request, res: Response) => {
        const id = +req.params.id;

        const [error, dto] = UpdateCategoryDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        this.categoryService
            .updateById(dto!)
            .then((result) => res.status(200).json(result))
            .catch((err) => this.handleError(res, err));
    };

    public deleteCategory = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id)) {
            return res.status(400).json({
                error: 'El id debe ser numerico',
            });
        }

        this.categoryService
            .deleteById(id)
            .then((result) => res.status(200).json(result))
            .catch((err) => this.handleError(res, err));
    };
}
