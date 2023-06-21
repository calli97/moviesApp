import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User";

@Entity({ name: "roles" })
class Role extends BaseEntity {
    @PrimaryGeneratedColumn({ name: "role_id" })
    roleId: number;

    @Column()
    name: string;

    @OneToMany(() => User, (user) => user.role)
    user: User[];
}

export default Role;
