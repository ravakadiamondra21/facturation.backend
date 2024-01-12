import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Banque } from 'src/banque/entities/banque.entity';
import { Recette } from 'src/recette/entities/recette.entity';
import { Like, Repository } from 'typeorm';
import { CreateRelationRecetteDto } from './dto/create-relation-recette.dto';
import { UpdateRelationRecetteDto } from './dto/update-relation-recette.dto';
import { RelationRecette } from './entities/relation-recette.entity';

@Injectable()
export class RelationRecetteService {
  constructor(@InjectRepository(Recette) private recetteRepository: Repository<Recette>,
  @InjectRepository(Banque) private banqueRepository: Repository<Banque>,
  @InjectRepository(RelationRecette) private relationRecetteRepository : Repository<RelationRecette>){}

  async create(createRelationRecetteDto: CreateRelationRecetteDto) {
    const recette = await this.recetteRepository.findOneBy({id_recette: createRelationRecetteDto.recette})
    const banque = await this.banqueRepository.findOneBy({id_banque: createRelationRecetteDto.banque})


    return this.relationRecetteRepository.save({
      ...createRelationRecetteDto,
      recette,
      banque

    })
  }

  countByRef(notnull : string){
    return this.relationRecetteRepository.countBy({
      ref_lettrage : Like('%'+notnull+'%')  
    })
  }

  findAll() {
    return this.relationRecetteRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} relationRecette`;
  }

  update(id: number, updateRelationRecetteDto: UpdateRelationRecetteDto) {
    return `This action updates a #${id} relationRecette`;
  }

  remove(id: number) {
    return `This action removes a #${id} relationRecette`;
  }
}
