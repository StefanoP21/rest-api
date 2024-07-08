import { Router } from 'express';
import { CategoryRoutes } from './features/presentation';
import { ClientRoutes } from './features/presentation/client/routes';

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/category', CategoryRoutes.routes);
        router.use('/api/client', ClientRoutes.routes);

        return router;
    }
}
