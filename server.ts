import express, { Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from './src/interfaces/shared/swagger/swagger';
import IndexRoutes from './src/features/routes/indexRoutes';
import connection from './src/core/connection';

require("dotenv").config();

class Server {
    private app: Application;
    private port = process.env.PORT || 3000;
    private indexRoutes = new IndexRoutes();

    constructor() {
        this.app = express();
        this.config();

        this.middleware();
        this.routes();
    }

    config() {
        this.app.use("/documentation",swaggerUi.serve, swaggerUi.setup(swaggerSetup))
        new connection();
    }

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    }

    routes() {
        this.indexRoutes.allRoutes(this.app);
    }

    start() {
        this.app.listen(this.port, () => console.log(`Server on port ${this.port}`));
    }
}

const server = new Server();
server.start();

export default Server;