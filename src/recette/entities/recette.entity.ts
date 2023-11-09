import {Column, Double, Entity, ManyToOne } from "typeorm";
import { Admin } from "src/admin/entities/admin.entity";

@Entity()
export class Recette {
    @Column({primary: true, generated: true})
    id: number;
    @Column()
    date: Date;
    @Column()
    client: string;
    @Column()
    description: string;
    @Column()
    montant: number;
    @Column()
    isValidate: boolean;
    @Column()
    statu: string;

    @ManyToOne(() => Admin, (admin) => admin.id, {
        eager: true
    })
    admin: Admin;
}
