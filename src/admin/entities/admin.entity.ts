import { Recette } from "src/recette/entities/recette.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { ColdObservable } from "rxjs/internal/testing/ColdObservable";

@Entity()
export class Admin {
    @Column({primary: true, width: 10})
    id: number;
    @Column({primary: true, length: 50})
    mail: string;
    @Column({length: 30})
    nom: string;
    @Column({length: 30})
    prenom: string;
    @Column({length: 13})
    mdp: string;
    @OneToMany(() => Recette, (recette) => recette.admin)
    recettes: Recette[];

    // constructor(admin: Partial<Admin>){
    //     Object.assign(this, admin);
    // }
    async validatePassword(mdp: string): Promise<boolean>{
        return bcrypt.compare(mdp, this.mdp)
    }
}
