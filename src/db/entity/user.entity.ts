import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("users")
export class UserEntity extends BaseEntity {
  // 유저 primary key
  @PrimaryColumn("uuid")
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
