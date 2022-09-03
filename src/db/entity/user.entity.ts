import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

import { IUser } from "../../types/interfaces/IUserService";

@Entity("user")
export class UserEntity extends BaseEntity implements IUser {
  // 유저 primary key
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  // user email id
  @Column({
    name: "email",
    type: "varchar",
    unique: true,
    nullable: false,
    length: 50,
  })
  email: string;

  // 유저 이름
  @Column({ name: "user_nm", type: "varchar", nullable: false, length: 20 })
  name: string;

  // 생성일
  @CreateDateColumn({ name: "create_dt", type: "timestamptz", nullable: false })
  create_dt: string;

  // 수정일
  @UpdateDateColumn({ name: "update_dt", type: "timestamptz", nullable: false })
  update_dt: string;
}
