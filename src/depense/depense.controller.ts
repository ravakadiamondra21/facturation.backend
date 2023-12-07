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

  @Get('/id/:id')
  async findOne(@Param('id') id: number) {
    return this.depenseService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateDepenseDto: UpdateDepenseDto) {
    return this.depenseService.update(+id, updateDepenseDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
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
  async findByDateOperation(@Param('date') date: Date, @Param('banque') banque:string, @Param('other') other:string){
    return this.depenseService.findByDateOperation(date, banque, other);
  }


   @Get('/statu/:statu/:isValidate')
   async findByStatu(@Param('statu') statu: string, @Param('isValidate') isValidate: string){
     return this.depenseService.findStatu(statu, JSON.parse(isValidate))
   }

   @Get('/sort')
  async sortBy(){
    console.log("sort")
    return this.depenseService.sortBy()
  }

  @Get('/count/:ref_lettrage')
  async count(@Param('ref_lettrage') ref_lettrage : string){
    return this.depenseService.countByRef(ref_lettrage)
  }
  // @Get('count/:date')
  // countRecette( @Param("date") date:any){
  //   return this.depenseService.countDepense(date)
  // }

  @Get('/matched')
  async findMatched(){
    return this.depenseService.findMatched()
  }
}
