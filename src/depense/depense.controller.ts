import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { CreateDepenseDto } from './dto/create-depense.dto';
import { UpdateDepenseDto } from './dto/update-depense.dto';

@Controller('depense')
export class DepenseController {
  constructor(private readonly depenseService: DepenseService) {}

  @Post()
  async create(@Body() createDepenseDto: CreateDepenseDto) {
    return this.depenseService.create(createDepenseDto);
  }

  @Get()
  findAll() {
    return this.depenseService.findAll();
  }

  @Get('/id/:id_depense')
  async findOne(@Param('id_depense') id: number) {
    return this.depenseService.findOne(+id);
  }

  @Patch(':id_depense')
  async update(@Param('id_depense') id: number, @Body() updateDepenseDto: UpdateDepenseDto) {
    return this.depenseService.update(+id, updateDepenseDto);
  }

  @Delete(':id_depense')
  async remove(@Param('id_depense') id: string) {
    return this.depenseService.remove(+id);
  }

  @Get('/dateFacture/:date_facture')
  async findByDateFacture(@Param('date_facture') date: Date){
    return this.depenseService.findByDateFacture(date);
  }

  @Get('/circuit/:circuit')
  async findByCircuit(@Param('circuit') circuit: string){
    return this.depenseService.findByCircuit(circuit)
  }

  @Get('/date_operation/:date_operation')
  async findDateOperation(@Param('date_operation') date_operation: Date){
    return this.depenseService.findDateOperation(date_operation)
  }

  @Get('/dateOperation/:date/:banque/:other')
  async findByDateOperation(@Param('date') date: string, @Param('banque') banque:string, @Param('other') other:string){
    return this.depenseService.findByDateOperation(date, banque, other);
  }


   @Get('/sort')
  async sortBy(){
    console.log("sort")
    return this.depenseService.sortBy()
  }

  // @Get('/count/:ref_lettrage')
  // async count(@Param('ref_lettrage') ref_lettrage : string){
  //   return this.depenseService.countByRef(ref_lettrage)
  // }

  @Get('/count')
  countRecette(){
    return this.depenseService.countDepense()
  }

  @Get('/countByDate/:date_facture')
  countByDate(@Param('date_facture') date_facture: Date){
    return this.depenseService.countByDate(date_facture)
  }

  @Get('/countByMonth/:date_facture')
  countByMonth(@Param('date_facture') date_facture: Date){
    return this.depenseService.countByMois(date_facture)
  }

  // @Get('/matched')
  // async findMatched(){
  //   return this.depenseService.findMatched()
  // }
}
