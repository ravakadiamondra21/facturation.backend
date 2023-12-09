
import { CreateRelationDepenseDto } from './create-relation-depense.dto';

export class UpdateRelationDepenseDto {
    id: number;
    banque: number;
    depenseId: number;
    ref_lettrage: string;
}
