import ImageRepository from '@modules/image/infra/typeorm/repositories/ImageRepository';
import IImageRepository from '@modules/image/repositories/IImageRepository';
import IFileDTO from '@shared/dtos/IFileDTO';
import { inject, injectable } from 'tsyringe';


@injectable()
export default class UpdateImageService {
  constructor(
    @inject(ImageRepository)
    private imageRepository: IImageRepository,
  ) {}

  public async execute(id: string, data: IFileDTO): Promise<void> {
    await this.imageRepository.update(id, data);
  }
}
