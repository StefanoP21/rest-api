import { Router } from 'express';
import { ClienteService } from '../services/client.service';
import { CategoryController } from './controller';

export class ClientRoutes {
    static get routes(): Router {
        const router = Router();
        const clienteService = new ClienteService();
        const controller = new CategoryController(clienteService);

        router.post('/', controller.createClient);
        router.get('/:id', controller.getClient);
        router.put('/:id', controller.updateClient);
        router.delete('/:id', controller.deleteClient);

        return router;
    }
}
