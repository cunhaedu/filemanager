import SysFile from '@modules/image/infra/typeorm/entities/SysFile';
import ImageRepository from '@modules/image/infra/typeorm/repositories/ImageRepository';
import IImageRepository from '@modules/image/repositories/IImageRepository';
import IFileDTO from '@shared/dtos/IFileDTO';
import { inject, injectable } from 'tsyringe';


@injectable()
export default class CreateImageService {
  constructor(
    @inject(ImageRepository)
    private imageRepository: IImageRepository,
  ) {}

  public async execute(data: IFileDTO[]): Promise<SysFile[]> {
    if (!data.length) {
      throw new Error('Please, provide a image!');
    }

    return this.imageRepository.create(data);
  }
}
