import { RelationDepense } from "src/relation-depense/entities/relation-depense.entity";
import { RelationRecette } from "src/relation-recette/entities/relation-recette.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Banque {
    @Column({primary: true, generated: true})
    id_banque: number;
    @Column()
    date_operation: Date;
    @Column({length: 50})
    libelle: string;
    @Column({nullable: true})
    debit: Number;
    @Column({ nullable: true})
    credit: Number;
    @Column()
    solde: Number;

    @OneToMany(type => RelationRecette, relationRecette => relationRecette.banque)
    relationRecette : RelationRecette[];

    @OneToMany(type => RelationDepense, relationDepense => relationDepense.depense)
    relationDepense : RelationDepense[]
}
