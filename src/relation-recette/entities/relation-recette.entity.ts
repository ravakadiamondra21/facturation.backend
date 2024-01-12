import { Banque } from "src/banque/entities/banque.entity";
import { Recette } from "src/recette/entities/recette.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class RelationRecette {
    @Column({primary: true, generated: true})
    id: number

    @ManyToOne(type => Banque, banque => banque.id_banque, {
        eager: true
    })
    banque: Banque

    @ManyToOne(type => Recette, recette => recette.relation, {
        eager: true
    })
    recette : Recette

    @Column()
    ref_lettrage: string
}
