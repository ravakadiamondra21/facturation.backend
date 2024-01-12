import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timestamp } from 'rxjs';
import { EntityManager, Like, Repository } from 'typeorm';
import { CreateBanqueDto } from './dto/create-banque.dto';
import { UpdateBanqueDto } from './dto/update-banque.dto';
import { Banque } from './entities/banque.entity';


@Injectable()
export class BanqueService {
  constructor(@InjectRepository(Banque) private banqueRepository : Repository<Banque>,
  private readonly entityManager : EntityManager
  ){}

  async create(createBanqueDto : CreateBanqueDto) {
    return this.banqueRepository.save(createBanqueDto)
  }

  

  find(){
    return this.banqueRepository.query('select * from banque where id_banque not in'+
    '(select banqueIdBanque from relation_depense) and id_banque not in (select banqueIdBanque from relation_recette)')
  }

  searchDateOperation(date: Date){
    return this.banqueRepository.query('select * from banque where date_format(date_operation, "%Y-%c-%d") = "'+ date + '"')
    
  }

  countByDate(date: Date){
    return this.banqueRepository.query('select * from banque where date_format(date_operation, "%Y-%c-%d") = "' +date+ '"');
  }

  // countByDate(date: Date){
  //   return this.banqueRepository.count({
  //     where : {
  //       date_operation : date
  //     }
  //   })
  // }

  saerchLibelle(libelle: string){
    return this.banqueRepository.find({
      where: {
        libelle: Like('%'+ libelle + '%')
      }
    })
  }

  countBanque(){
    return this.banqueRepository.count()
  }
}
