
import { Double } from 'typeorm';
import { CreateRecetteDto } from './create-recette.dto';

export class UpdateRecetteDto {
    date: Date;
    client: string;
    description: string;
    montant: number;
    isValidate: boolean;
    statu: string;
}
