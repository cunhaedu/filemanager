import { inject, injectable } from 'tsyringe';

import Image from '@modules/image/infra/typeorm/entities/SysImage';
import IImageRepository from '@modules/image/repositories/IImageRepository';
import ImageRepository from '@modules/image/infra/typeorm/repositories/ImageRepository';
import { AppError } from 'ekaizen-framework/errors';
import { ICompanyDTO } from 'ekaizen-framework/dtos';

@injectable()
export default class FindImageService {
  constructor(
    @inject(ImageRepository)
    private imageRepository: IImageRepository,
  ) {}

  public async execute(id: number, company: ICompanyDTO): Promise<Image> {
    const image = await this.imageRepository.findById(id, company.id);

    if (!image) {
      throw new AppError([AppError.commons.NOT_FOUND]);
    }

    return image;
  }
}
