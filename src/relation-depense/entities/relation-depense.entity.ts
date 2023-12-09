import { Banque } from "src/banque/entities/banque.entity";
import { Depense } from "src/depense/entities/depense.entity";
import { Column, Entity, ManyToOne} from "typeorm";

@Entity()
export class RelationDepense {
    @Column({primary: true, generated: true})
    id: number

    @ManyToOne(type => Banque, banque => banque.id_banque, {
        eager: true
    })
    banque: Banque;

    @ManyToOne(type => Depense, depense => depense.relation, {
        eager: true
    })
    depense: Depense;

    @Column()
    ref_lettrage: string
}
