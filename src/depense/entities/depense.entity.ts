import { Admin } from "src/admin/entities/admin.entity";
import { Banque } from "src/banque/entities/banque.entity";
import { RelationDepense } from "src/relation-depense/entities/relation-depense.entity";
import { Column, CommandSucceededEvent, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Depense {
    @Column({primary: true, generated: true, unique: true})
    id_depense: number;
    @Column({nullable: true})
    date_operation: Date;
    @Column({nullable: true})
    date_facture: Date;
    @Column()
    numero_facture : number
    @Column({ length: 50})
    type: string;
    @Column({length: 15})
    circuit: string;
    @Column({length: 50})
    fournisseur: string;
    @Column({length: 50})
    description: string;
    @Column()
    montant_HT: number;
    @Column()
    TVA: number;
    @Column({length: 8})
    statu: string;
    // @Column({length: 8})
    // ref_lettrage: string;

    @ManyToOne(() => Admin, (admin)=> admin.id, {
        eager: true
    })
    admin: Admin;
    
    @OneToMany(type => RelationDepense, relationDepense => relationDepense.depense)
    relation: RelationDepense[]
}
