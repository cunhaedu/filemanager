import SysFile from '@modules/image/infra/typeorm/entities/SysFile';
import IFileDTO from '@shared/dtos/IFileDTO';
import { DeleteResult, UpdateResult } from 'typeorm';

export default interface IImageRepository {
  create(data: IFileDTO[]): Promise<SysFile[]>;
  update(id: string, data: IFileDTO): Promise<UpdateResult>;
  findById(id: string): Promise<SysFile | undefined>;
  softDelete(id: string): Promise<DeleteResult>;
  find(): Promise<SysFile[]>;
}
