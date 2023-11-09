import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/admin/entities/admin.entity';
import { EntityManager, Repository } from 'typeorm';
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
    depense.date = updateDepenseDto.date;
    depense.type = updateDepenseDto.type;
    depense.fournisseur = updateDepenseDto.fournisseur;
    depense.description = updateDepenseDto.description;
    depense.montant = updateDepenseDto.montant;
    depense.isValidate = updateDepenseDto.isValidate;
    depense.statu = updateDepenseDto.statu;
    return await this.entityManager.save(depense);
  }

  remove(id: number) {
    return this.depenseRepository.delete({id});
  }

  findByDate(date : Date){
    return this.depenseRepository.findBy({date})
  }

  findByValidation(isValidate : boolean){
    return this.depenseRepository.findBy({isValidate})
    
  }
  
  findStatu(statu: string, isValidate: boolean){
    return this.depenseRepository.findBy({statu, isValidate})
    
  }


}
