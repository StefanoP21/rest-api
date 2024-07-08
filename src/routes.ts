import { Router } from 'express';
import {
    CategoryRoutes,
    ClientRoutes,
    OrderRoutes,
    ProductRoutes,
} from './features/presentation';

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/category', CategoryRoutes.routes);
        router.use('/api/client', ClientRoutes.routes);
        router.use('/api/product', ProductRoutes.routes);
        router.use('/api/order', OrderRoutes.routes);

        return router;
    }
}
