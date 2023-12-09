import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    console.log("aty amn nest")
    return this.banqueRepository.save(createBanqueDto)
  }

  find(){
    return this.banqueRepository.query('select * from banque where id_banque not in'+
    '(select banqueIdBanque from relation_depense) and id_banque not in (select banqueIdBanque from relation_recette)')
  }

  
  // async update(id: number, updateBanqueDto: UpdateBanqueDto) {
  //   const banque = await this.banqueRepository.findOneByOrFail({id})
  //   banque.chemin = updateBanqueDto.chemin;
  //   banque.ref_lettrage = updateBanqueDto.ref_lettrage;
    
  //   return await this.entityManager.save(banque)
  // }

  
  // // remove(id: number) {
  // //   return `This action removes a #${id} banque`;
  // // }

  // countByRef(notnull : string){
  //   return this.banqueRepository.countBy({
  //     ref_lettrage : Like('%'+notnull+'%')  
  //   })
  // }
}
