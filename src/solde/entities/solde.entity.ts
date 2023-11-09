import { Column, Entity } from "typeorm";

@Entity()
export class Solde {
    @Column({primary: true})
    nom: string

    @Column()
    somme : number

    
}
