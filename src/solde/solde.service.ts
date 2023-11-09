import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { CreateSoldeDto } from './dto/create-solde.dto';
import { UpdateSoldeDto } from './dto/update-solde.dto';
import { Solde } from './entities/solde.entity';

@Injectable()
export class SoldeService {
  constructor(private readonly entityManager: EntityManager,
  @InjectRepository(Solde) private soldeRepository : Repository<Solde>){}

  create(createSoldeDto: CreateSoldeDto) {
    return this.soldeRepository.save(createSoldeDto)
  }

  findAll() {
    return this.soldeRepository.find()
  }

  findOne(nom: string) {
    return this.soldeRepository.findOneBy({nom});
  }

  async update(nom : string, updateSoldeDto: UpdateSoldeDto) {
    const solde = await this.soldeRepository.findOneBy({nom})
    solde.somme = updateSoldeDto.somme;

    await this.entityManager.save(solde);

  }

}
