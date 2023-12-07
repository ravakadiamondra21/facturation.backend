import {Column, Double, Entity, ManyToOne } from "typeorm";
import { Admin } from "src/admin/entities/admin.entity";

@Entity()
export class Recette {
    @Column({primary: true, generated: true})
    id: number;
    @Column({nullable: true})
    date_operation: Date;
    @Column({nullable: true})
    date_facture: Date;
    @Column({length: 20})
    client: string;
    @Column({length: 50})
    description: string;
    @Column({length: 8})
    statu: string;
    @Column({length: 8})
    ref_lettrage : string;
    @Column()
    montant_HT: Number;
    @Column()
    TVA: Number
    @Column()
    numero_facture: Number;

    @ManyToOne(() => Admin, (admin) => admin.id, {
        eager: true
    })
    admin: Admin;
}
