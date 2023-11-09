import { Admin } from "src/admin/entities/admin.entity";
import { Column, CommandSucceededEvent, Entity, ManyToOne } from "typeorm";

@Entity()
export class Depense {
    @Column({primary: true, generated: true})
    id: number;
    @Column()
    date: Date;
    @Column()
    type: string;
    @Column()
    fournisseur: string;
    @Column()
    description: string;
    @Column()
    montant: number;
    @Column()
    isValidate: boolean; 
    @Column()
    statu: string;

    @ManyToOne(() => Admin, (admin)=> admin.id, {
        eager: true
    })
    admin: Admin;
}
