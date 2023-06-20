import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "movies" })
@Unique(["title"])
class Movie extends BaseEntity {
    @PrimaryGeneratedColumn({ name: "movie_id" })
    movieId: number;

    @Column({ name: "title" })
    title: string;

    @Column({ name: "description" })
    description: string;

    @Column({ name: "release_date" })
    releaseDate: number;

    @Column({ name: "user_id" })
    userId: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}

export default Movie;
