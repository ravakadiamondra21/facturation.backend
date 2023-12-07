import { Column, Entity } from "typeorm";

@Entity()
export class Banque {
    @Column({primary: true, generated: true})
    id: number;
    @Column({length: 8})
    ref_lettrage: string;
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
    @Column({length: 8})
    chemin: string
}
