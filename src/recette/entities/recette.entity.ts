import {Column, Double, Entity, ManyToOne, OneToMany } from "typeorm";
import { Admin } from "src/admin/entities/admin.entity";
import { RelationRecette } from "src/relation-recette/entities/relation-recette.entity";

@Entity()
export class Recette {
    @Column({primary: true, generated: true})
    id_recette: number;
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
    // @Column({length: 8})
    // ref_lettrage : string;
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

    @OneToMany(type => RelationRecette, relationRecette => relationRecette.recette)
    relation: RelationRecette[]
}
