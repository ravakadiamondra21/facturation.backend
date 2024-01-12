import { Recette } from "src/recette/entities/recette.entity";
import { Column, Entity, OneToMany} from "typeorm";


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

    
}
