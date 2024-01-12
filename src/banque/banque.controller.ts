import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { BanqueService } from './banque.service';
import { CreateBanqueDto } from './dto/create-banque.dto';


@Controller('banque')
export class BanqueController {

  constructor(private banqueService : BanqueService){}
  @Post()
  async create(@Body() createBanqueDto: CreateBanqueDto) {
    
    return await this.banqueService.create(createBanqueDto);
  }

  @Get()
  find() {
    return this.banqueService.find();
  }

  @Get('/date_operation/:date_operation')
  search(@Param('date_operation') date_operation: Date){
    return this.banqueService.searchDateOperation(date_operation);
  }

  @Get('/libelle/:libelle')
  searchLibelle(@Param('libelle') libelle: string){
    return this.banqueService.saerchLibelle(libelle)
  }

  @Get('/count')
  count(){
    return this.banqueService.countBanque()
  }

  @Get('/countByDate/:date_operation')
  countByDaare(@Param('date_operation') date_operation: Date){
    return this.banqueService.countByDate(date_operation)
  }
}
