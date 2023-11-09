
import { CreateDepenseDto } from './create-depense.dto';

export class UpdateDepenseDto{
    date: Date;
    type: string;
    fournisseur: string;
    description: string;
    montant: number;
    isValidate: boolean;
    statu: string;
}
