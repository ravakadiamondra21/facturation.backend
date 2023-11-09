import { Recette } from "src/recette/entities/recette.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class Admin {
    @Column({primary: true})
    id: number;
    @Column({length: 20})
    mail: string;
    @Column()
    nom: string;
    @Column()
    prenom: string;
    @Column()
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
