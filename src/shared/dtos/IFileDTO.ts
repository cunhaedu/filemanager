import IDefaultDTO from '@shared/dtos/IDefaultDTO';

export default interface IFileDTO extends IDefaultDTO {
  name: string;
  key: string;
  url: string;
}
