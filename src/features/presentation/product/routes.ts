import { Router } from 'express';

import { ProductService } from '../services/product.service';
import { ProductController } from './controller';

export class ProductRoutes {
    static get routes(): Router {
        const router = Router();
        const productService = new ProductService();
        const controller = new ProductController(productService);

        router.post('/', controller.createProduct);
        router.get('/:id', controller.getProduct);
        router.put('/:id', controller.updateProduct);
        router.delete('/:id', controller.deleteProduct);

        return router;
    }
}
