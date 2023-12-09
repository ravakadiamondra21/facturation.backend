
import { CreateRelationRecetteDto } from './create-relation-recette.dto';

export class UpdateRelationRecetteDto{
    id: number;
    banque: number;
    recette: number;
    ref_lettrage: string;
}
