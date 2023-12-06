import express, { Request, Response, Router } from 'express';
import routes from './routes';

const app: express.Express = express();

const PORT: Number = Number(process.env.PORT) || 3000;

app.use(express.json());

Object.values(routes).forEach((route: Router) => {
    app.use(route);
});

app.listen(PORT, () => {
    console.log(PORT, 'Running application');
});