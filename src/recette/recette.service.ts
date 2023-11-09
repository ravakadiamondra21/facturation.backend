import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAdminDto } from 'src/admin/dto/update-admin.dto';
import { Admin } from 'src/admin/entities/admin.entity';
import { EntityManager, Repository } from 'typeorm';
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
    recette.date = updateRecetteDto.date;
    recette.client = updateRecetteDto.client;
    recette.description = updateRecetteDto.description;
    recette.montant = updateRecetteDto.montant;
    recette.isValidate = updateRecetteDto.isValidate;
    recette.statu = updateRecetteDto.statu;
    await this.entityManager.save(recette);
  }

  remove(id: number) {
    return this.recetteRepository.delete({id});
  }

  findByDate(date: Date){
    return this.recetteRepository.findBy({date})
  }

  findByStatu(statu: string, isValidate: boolean){
    return this.recetteRepository.findBy({statu, isValidate})
  }
}
