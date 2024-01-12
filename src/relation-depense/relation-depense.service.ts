import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Banque } from 'src/banque/entities/banque.entity';
import { Depense } from 'src/depense/entities/depense.entity';
import { Like, Repository } from 'typeorm';
import { CreateRelationDepenseDto } from './dto/create-relation-depense.dto';
import { UpdateRelationDepenseDto } from './dto/update-relation-depense.dto';
import { RelationDepense } from './entities/relation-depense.entity';

@Injectable()
export class RelationDepenseService {
  constructor(@InjectRepository(Depense) private depenseRepository : Repository<Depense>,
  @InjectRepository(Banque) private banqueRepository : Repository<Banque>,
  @InjectRepository(RelationDepense) private relationDepenseRepository : Repository<RelationDepense>){}

  async create(createRelationDepenseDto: CreateRelationDepenseDto) {
    const depense = await this.depenseRepository.findOneBy({id_depense : createRelationDepenseDto.depense})
    const banque = await this.banqueRepository.findOneBy({id_banque : createRelationDepenseDto.banque})

    return await this.relationDepenseRepository.save({
      ...createRelationDepenseDto,
      depense,
      banque
    })
  }

  findAllId() {
     return this.relationDepenseRepository.find()
  }

  countByRef(notnull : string){
    return this.relationDepenseRepository.countBy({
      ref_lettrage : Like('%'+notnull+'%')  
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} relationDepense`;
  }

  update(id: number, updateRelationDepenseDto: UpdateRelationDepenseDto) {
    return `This action updates a #${id} relationDepense`;
  }

  remove(id: number) {
    return `This action removes a #${id} relationDepense`;
  }

  findAll(){
    return this.relationDepenseRepository.find();
  }

  findSome(){
    return this.relationDepenseRepository.find()
  }

}
