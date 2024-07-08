import { Router } from 'express';
import { OrderService } from '../services/order.service';
import { OrderController } from './controller';

export class OrderRoutes {
    static get routes(): Router {
        const router = Router();
        const orderService = new OrderService();
        const controller = new OrderController(orderService);

        router.post('/', controller.createOrder);
        router.get('/:id', controller.getOrder);
        router.put('/:id', controller.updateOrder);
        router.delete('/:id', controller.deleteOrder);

        return router;
    }
}
