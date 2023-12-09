import { Admin } from "src/admin/entities/admin.entity";
import { Double } from "typeorm";

export class CreateRecetteDto {
    date_operation: Date;
    date_facture: Date;
    client: string;
    description: string;
    montant_HT: number;
    TVA: number;
    admin: number;
    statu: string;
    numero_facture: number;

}
