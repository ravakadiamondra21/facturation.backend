export class CreateBanqueDto {
    date_operation: Date;
    ref_lettrage: string;
    libelle: string;
    debit: Number;
    credit: Number;
    solde: Number;
    chemin: string;
}