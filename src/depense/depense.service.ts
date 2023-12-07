import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/admin/entities/admin.entity';
import { EntityManager, Like, Not, Repository } from 'typeorm';
import { CreateDepenseDto } from './dto/create-depense.dto';
import { UpdateDepenseDto } from './dto/update-depense.dto';
import { Depense } from './entities/depense.entity';

@Injectable()
export class DepenseService {
  constructor(private readonly entityManager: EntityManager,
    @InjectRepository(Depense) private depenseRepository: Repository<Depense>,
    @InjectRepository(Admin) private adminRepository: Repository<Admin>){
      
    }

  async create(createDepenseDto: CreateDepenseDto) {
    const admin = await this.adminRepository.findOneBy({id: createDepenseDto.admin})
     if(!admin){
      throw new BadRequestException("admin not found");
     }
    return await this.depenseRepository.save({
      ...createDepenseDto,
      admin
    })
  }

  findAll() {
    return this.depenseRepository.find();
  }

  async findOne(id: number) {
    return this.depenseRepository.findOneBy({id})
  }

  async update(id: number, updateDepenseDto: UpdateDepenseDto) {
    const depense = await this.depenseRepository.findOneBy({id});
    depense.date_operation = updateDepenseDto.date_operation;
    depense.type = updateDepenseDto.type;
    depense.fournisseur = updateDepenseDto.fournisseur;
    depense.description = updateDepenseDto.description;
    depense.montant_HT = updateDepenseDto.montant_HT;
    depense.isValidate = updateDepenseDto.isValidate;
    depense.statu = updateDepenseDto.statu;
    depense.TVA = updateDepenseDto.TVA;
    depense.admin.id = updateDepenseDto.admin;
    depense.circuit = updateDepenseDto.circuit;
    depense.date_facture = updateDepenseDto.date_facture;
    depense.numero_facture = updateDepenseDto.numero_facture;
    depense.ref_lettrage = updateDepenseDto.ref_lettrage;
    return await this.entityManager.save(depense);
  }

  remove(id: number) {
    return this.depenseRepository.delete({id});
  }

  findByDateFacture(date : Date){
    return this.depenseRepository.find({
      where: {
        date_facture : date
      },
      order: {
        id : "DESC"
      }
    })
  }

  findByCircuit(code: string){
    return this.depenseRepository.find({
      where: {
        circuit: code
      },
      order: {
        id: 'DESC'
      }
    })
  }

  findDateOperation(date: Date){
    return this.depenseRepository.find({
      where: {

        date_operation: date
      },
      order: {
        id: 'DESC'
      }
    })
  }

  findByDateOperation(date : Date, banque: string, other: string){
    return this.depenseRepository.find({
      where: [
        {
          date_operation : date,
          statu : banque,
          ref_lettrage : ""
        },
        {
          date_operation: date,
          statu: other,
          ref_lettrage : ""
        }
      ],
      order: {
        id : "DESC"
      }
    })
  }

  // findByValidation(isValidate : boolean){
  //   return this.depenseRepository.findBy({isValidate})
    
  // }
  
  findStatu(statu: string, isValidate: boolean){
    return this.depenseRepository.findBy({statu, isValidate})
    
  }

  
  sortBy(){
    return this.depenseRepository.find({
      take : 10,
      order : {
        id : "DESC"
      }
    })
  }

  // countDepense(date){
  //   return this.depenseRepository.countBy({date})
  // }

  countByRef(notnull : string){
    return this.depenseRepository.countBy({
      ref_lettrage : Like('%'+notnull+'%')  
    })
  }

  findMatched(){
    return this.depenseRepository.find({
      where: {
        ref_lettrage: Like('%B%')
      },
      order: {
        ref_lettrage: 'DESC'
      }
    })
  }
}
