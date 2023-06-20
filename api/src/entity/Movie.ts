import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "movies" })
class Movie extends BaseEntity {
    @PrimaryGeneratedColumn({ name: "movie_id" })
    movieId: number;

    @Column({ name: "title" })
    title: string;

    @Column({ name: "description" })
    description: string;

    @Column({ name: "release_date" })
    releaseDate: string;

    @Column({ name: "user_id" })
    userId: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}

export default Movie;
