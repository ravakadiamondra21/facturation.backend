import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecetteService } from './recette.service';
import { CreateRecetteDto } from './dto/create-recette.dto';
import { UpdateRecetteDto } from './dto/update-recette.dto';
import { count } from 'rxjs';

@Controller('recette')
export class RecetteController {
  constructor(private readonly recetteService: RecetteService) {}

  @Post()
  async create(@Body() createRecetteDto: CreateRecetteDto) {
    return this.recetteService.create(createRecetteDto);
  }

  @Get()
  findAll() {
    return this.recetteService.findAll();
  }

  // @Get('/id/:id')
  // async findOne(@Param('id') id: string) {
  //   return this.recetteService.findOne(+id);
  // }

  @Patch(':id_recette')
  async update(@Param('id_recette') id: string, @Body() updateRecetteDto: UpdateRecetteDto) {
    return this.recetteService.update(+id, updateRecetteDto);
  }

  @Delete(':id_recette')
  async remove(@Param('id_recette') id: string) {
    return this.recetteService.remove(+id);
  }

  // //  @Get('/date/:date')
  // //  async getByDate(@Param('date') date: Date){
  // //    return this.recetteService.findByDate(date);
  // //  }

  // //  @Get('/statu/:statu/:isValidate')
  // //  findByStatu(@Param('statu') statu : string, @Param('isValidate') isValidate: string){
  // //    let boolIsValidate = JSON.parse(isValidate)
  // //    return this.recetteService.findByStatu(statu, boolIsValidate)
  // //  }

   @Get('/sort')
  async sortBy(){
    console.log("sort")
    return this.recetteService.sortBy()
  }

  @Get('/count')
  count(){
    return this.recetteService.count();
  }

  @Get("/date_op/:date_operation/:banque/:other")
  async findeByDateOperation(@Param("date_operation") date_operation: string,@Param('banque') banque:string, @Param('other') other:string){
    return this.recetteService.findByDateOperation(date_operation, banque, other)
  }

  @Get('/lastId')
  async getLastId(){
    return this.recetteService.getLastId()
  }
  

  // @Get("/count/:ref_lettrage")
  // async count(@Param("ref_lettrage") ref_lettrage: string){
  //   return this.recetteService.countByRef(ref_lettrage)
  // }

  @Get('/date_facture/:date_facture')
  async findByDateFacture(@Param("date_facture") date_facture: Date){
    return this.recetteService.findByDateFacture(date_facture)
  }

  @Get('/date_operation/:date_operation')
  async findOperation(@Param("date_operation") date_operation: Date){
    return this.recetteService.findDateOperation(date_operation)
  }

  @Get('/countByDate/:date_facture')
  countByDate(@Param('date_facture') date_facture: Date){
    return this.recetteService.countByDate(date_facture)
  }

  @Get('/countByMonth/:date_facture')
  countByMonth(@Param('date_facture') date_facture: Date){
    return this.recetteService.countByMois(date_facture)
  }

  // @Get('/matched')
  // async findMatched(){
  //   return this.recetteService.findMatched()
  // }
}
