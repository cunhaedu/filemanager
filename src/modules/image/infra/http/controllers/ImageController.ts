import CreateImageService from '@modules/image/services/CreateImageService';
import IFileDTO from '@shared/dtos/IFileDTO';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export default class LayoutController {
  public async upload(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const requestImages = req.files as Express.MulterS3.File[];

      const files = requestImages.map(image => {
        return {
          key: image.key,
          url: image.location,
          name: image.originalname
        } as IFileDTO;
      });

      const service = container.resolve(CreateImageService);

      res.json(await service.execute(files));
    } catch (err) {
      next(err);
    }
  }

  // public async download(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction,
  // ): Promise<void> {
  //   try {
  //     const { id } = req.params;
  //     const { company } = req.token.sub;
  //     const service = container.resolve(FindImageService);
  //     const image = await service.execute(Number(id), company);
  //     const uploadConfig = upload();

  //     const file = await new Promise<Buffer>((resolve, reject) => {
  //       readFile(
  //         `${uploadConfig.PATH}/${uploadConfig.IMAGES}/${image.link}`,
  //         (err, data) => {
  //           if (err)
  //             reject(
  //               new AppError([
  //                 { message: "We couldn't find this image in our server" },
  //               ]),
  //             );
  //           else resolve(data);
  //         },
  //       );
  //     });

  //     res.send(file);
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  // public async delete(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction,
  // ): Promise<void> {
  //   try {
  //     const { id } = req.params;

  //     const service = container.resolve(DeleteImageService);

  //     res.json(await service.execute(Number(id)));
  //   } catch (err) {
  //     next(err);
  //   }
  // }
}
