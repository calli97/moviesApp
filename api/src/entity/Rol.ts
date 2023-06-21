import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User";

@Entity({ name: "roles" })
class Rol extends BaseEntity {
    @PrimaryGeneratedColumn({ name: "rol_id" })
    rolId: number;

    @Column()
    name: string;

    @OneToMany(() => User, (user) => user.rol)
    user: User[];
}

export default Rol;
