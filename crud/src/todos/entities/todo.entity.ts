import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "todos"})       // table name of database
export class Todo {

    @PrimaryGeneratedColumn()
    id: number;                 // primary key

    @Column()
    title: string;
}
