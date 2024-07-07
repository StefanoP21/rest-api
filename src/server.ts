import express, { type Router, type Request, type Response } from 'express';
import cors from 'cors';
import { type Server as ServerHttp } from 'http';

interface ServerOptions {
    port: number;
    routes: Router;
}

export class Server {
    public readonly app = express();
    private serverListener?: ServerHttp;
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: ServerOptions) {
        const { port, routes } = options;
        this.port = port;
        this.routes = routes;
    }

    async start() {
        //* Middlewares
        this.app.use(cors());
        this.app.use(express.json()); // raw
        this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded

        //* Routes
        this.app.use(this.routes);

        //* Test route
        this.app.get('/', (_req: Request, res: Response) => {
            return res.status(200).send({
                message: `Welcome to this API! \n Endpoints available at http://localhost:${this.port}/`,
            });
        });

        //* Listener
        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port} 🚀`);
        });
    }

    public close(): void {
        this.serverListener?.close();
    }
}
