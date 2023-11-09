export class CreateDepenseDto {
    date: Date;
    type: string;
    fournisseur: string;
    description: string;
    montant: number;
    isValidate: boolean;
    statu: string;
    admin: number;
}
