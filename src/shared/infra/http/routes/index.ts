import imageRouter from '@modules/image/infra/http/routes/imageroutes';
import { Router } from 'express';

const routes = Router();

routes.use(imageRouter);

export default routes;
