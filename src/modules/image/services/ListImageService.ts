import SysFile from '@modules/image/infra/typeorm/entities/SysFile';
import ImageRepository from '@modules/image/infra/typeorm/repositories/ImageRepository';
import IImageRepository from '@modules/image/repositories/IImageRepository';
import { inject, injectable } from 'tsyringe';


@injectable()
export default class ListImageService {
  constructor(
    @inject(ImageRepository)
    private imageRepository: IImageRepository,
  ) {}

  public async execute(): Promise<SysFile[]> {
    return this.imageRepository.find();
  }
}
