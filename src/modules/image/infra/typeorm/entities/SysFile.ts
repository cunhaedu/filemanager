import IFileDTO from '@shared/dtos/IFileDTO';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn, Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('sys_file')
export default class SysFile implements IFileDTO {
  @PrimaryGeneratedColumn({ name: 'id_sys_file' })
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'key' })
  key: string;

  @Column({ name: 'url' })
  url: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
