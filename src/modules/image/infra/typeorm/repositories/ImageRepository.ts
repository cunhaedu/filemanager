import SysFile from '@modules/image/infra/typeorm/entities/SysFile';
import IImageRepository from '@modules/image/repositories/IImageRepository';
import IFileDTO from '@shared/dtos/IFileDTO';
import { DeleteResult, getRepository, UpdateResult } from 'typeorm';

export default class ImageRepository
  implements IImageRepository
{
  create(data: IFileDTO[]): Promise<SysFile[]> {
    return getRepository(SysFile).save(data);
  }

  update(id: string, data: IFileDTO): Promise<UpdateResult> {
    return getRepository(SysFile).update(id, data);
  }

  find(): Promise<SysFile[]> {
    return getRepository(SysFile).find();
  }

  findById(id: string): Promise<SysFile | undefined> {
    return getRepository(SysFile).findOne(id);
  }

  softDelete(id: string): Promise<DeleteResult> {
    return getRepository(SysFile).softDelete(id);
  }
}
