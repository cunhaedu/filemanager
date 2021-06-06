import ImageRepository from '@modules/image/infra/typeorm/repositories/ImageRepository';
import IImageRepository from '@modules/image/repositories/IImageRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class DeleteImageService {
  constructor(
    @inject(ImageRepository)
    private imageRepository: IImageRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const image = await this.imageRepository.findById(id);

    if (!image) {
      throw new Error('entity not found');
    }

    await this.imageRepository.softDelete(id);
  }
}
