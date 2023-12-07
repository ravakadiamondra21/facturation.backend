

export class UpdateDepenseDto{
    date_operation: Date;
    date_facture: Date;
    numero_facture: number;
    type: string;
    circuit: string;
    fournisseur: string;
    description: string;
    montant_HT: number;
    TVA: number;
    isValidate: boolean;
    statu: string;
    admin: number;
    ref_lettrage: string;
}
