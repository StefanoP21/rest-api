import { Router } from 'express';
import { CategoryController } from './controller';
import { CategoryService } from '../services/category.service';

export class CategoryRoutes {
    static get routes(): Router {
        const router = Router();
        const categoryService = new CategoryService();
        const controller = new CategoryController(categoryService);

        router.post('/', controller.createCategory);
        router.get('/', controller.getCategories);
        router.put('/:id', controller.updateCategory);
        router.delete('/:id', controller.deleteCategory);

        return router;
    }
}
