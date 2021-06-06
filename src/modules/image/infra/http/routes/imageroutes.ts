import ImageController from '@modules/image/infra/http/controllers/ImageController';
import _multer from '@shared/middlewares/multer';
import { Router } from 'express';

const multer = _multer(
  2048,
  ['jpg', 'png', 'jpeg', 'gif'],
);

const imageRouter = Router();
const imageController = new ImageController();

// imageRouter.get('/uploads/images/:id', imageController.download);
imageRouter.post(
  '/uploads/images',
  multer.array('image'),
  imageController.upload,
);
// imageRouter.put(
//   '/uploads/images/:id',
//   multer.array('image'),
//   imageController.update,
// );
imageRouter.delete('/uploads/images/:id', imageController.delete);

export default imageRouter;
