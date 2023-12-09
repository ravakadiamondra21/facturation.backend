

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
    statu: string;
    admin: number;
    relation: string;
}
