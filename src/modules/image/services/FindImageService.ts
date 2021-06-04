import SysFile from '@modules/image/infra/typeorm/entities/SysFile';
import ImageRepository from '@modules/image/infra/typeorm/repositories/ImageRepository';
import IImageRepository from '@modules/image/repositories/IImageRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class FindImageService {
  constructor(
    @inject(ImageRepository)
    private imageRepository: IImageRepository,
  ) {}

  public async execute(id: string): Promise<SysFile> {
    const image = await this.imageRepository.findById(id);

    if (!image) {
      throw new Error('file not found');
    }

    return image;
  }
}
