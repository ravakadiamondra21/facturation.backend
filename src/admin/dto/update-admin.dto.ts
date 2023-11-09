//import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto {
    mail: string;
    nom: string;
    prenom: string;
    pwd: string;
}
