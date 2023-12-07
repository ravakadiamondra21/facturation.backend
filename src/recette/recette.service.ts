import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAdminDto } from 'src/admin/dto/update-admin.dto';
import { Admin } from 'src/admin/entities/admin.entity';
import { EntityManager, Like, Repository } from 'typeorm';
import { CreateRecetteDto } from './dto/create-recette.dto';
import { UpdateRecetteDto } from './dto/update-recette.dto';
import { Recette } from './entities/recette.entity';

@Injectable()
export class RecetteService {

  constructor(private readonly entityManager: EntityManager,
    @InjectRepository(Recette) private recetteRepository: Repository<Recette>,
    @InjectRepository(Admin) private adminRepository: Repository<Admin>){

  }

  async create(createRecetteDto: CreateRecetteDto) {
    const admin = await this.adminRepository.findOneBy({id: createRecetteDto.admin})
    if (!admin){
      throw new BadRequestException('admin not found');
    }
    return await this.recetteRepository.save({
      ...createRecetteDto,
      admin
    })
  }

  findAll() {
    return this.recetteRepository.find();
  }

  async findOne(id: number) {
    return this.recetteRepository.findBy({id});
  }

  async update(id: number, updateRecetteDto: UpdateRecetteDto) {
    const recette = await this.recetteRepository.findOneBy({id});
    recette.date_facture = updateRecetteDto.date_facture;
    recette.date_operation = updateRecetteDto.date_operation;
    recette.client = updateRecetteDto.client;
    recette.description = updateRecetteDto.description;
    recette.montant_HT = updateRecetteDto.montant_HT;
    recette.TVA = updateRecetteDto.TVA;
    recette.statu = updateRecetteDto.statu;
    recette.ref_lettrage = updateRecetteDto.ref_lettrage;
    recette.admin.id = updateRecetteDto.admin;
    await this.entityManager.save(recette);
  }

  remove(id: number) {
    return this.recetteRepository.delete({id});
  }

  // findByDate(date: Date){
  //   return this.recetteRepository.findBy({date})
  // }

  // findByStatu(statu: string, isValidate: boolean){
  //   return this.recetteRepository.findBy({statu, isValidate})
  // }

  // count(date){
  //   return this.recetteRepository.countBy({date})
  // }
  sortBy(){
    return this.recetteRepository.find({
      take : 10,
      order : {
        id : "DESC"
      }
    })
  }

  findByDateOperation(date : Date){
    return this.recetteRepository.find({
      where: [
        {
          date_operation : date,
          ref_lettrage : ""
        },
      ],
      order: {
        id : "DESC"
      }
    })
  }

  findByDateFacture(date : Date){
    return this.recetteRepository.find({
      where: {
        date_facture : date
      },
      order: {
        id : "DESC"
      }
    })
  }

  

  findDateOperation(date: Date){
    return this.recetteRepository.find({
      where: {

        date_operation: date
      },
      order: {
        id: 'DESC'
      }
    })
  }


  countByRef(notnull : string){
    return this.recetteRepository.countBy({
      ref_lettrage : Like('%'+notnull+'%')  
    })
  }

  findMatched(){
    return this.recetteRepository.find({
      where: {
        ref_lettrage: Like('%B%')
      },
      order: {
        ref_lettrage: 'DESC'
      }
    })
  }
}
