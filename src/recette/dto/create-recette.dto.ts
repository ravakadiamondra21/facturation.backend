import { Admin } from "src/admin/entities/admin.entity";
import { Double } from "typeorm";

export class CreateRecetteDto {
    date: Date;
    client: string;
    description: string;
    montant: number;
    admin: number;
    isValidate: boolean;
    statu: string;
}
