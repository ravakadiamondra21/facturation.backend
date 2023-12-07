
import { Double } from 'typeorm';
import { CreateRecetteDto } from './create-recette.dto';

export class UpdateRecetteDto {
    date_operation: Date;
    date_facture: Date;
    client: string;
    description: string;
    montant_HT: number;
    TVA: number;
    admin: number;
    statu: string;
    ref_lettrage: string;
    numero_facture: number;
}
