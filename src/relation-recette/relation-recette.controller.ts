import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelationRecetteService } from './relation-recette.service';
import { CreateRelationRecetteDto } from './dto/create-relation-recette.dto';
import { UpdateRelationRecetteDto } from './dto/update-relation-recette.dto';

@Controller('relation-recette')
export class RelationRecetteController {
  constructor(private readonly relationRecetteService: RelationRecetteService) {}

  @Post()
  create(@Body() createRelationRecetteDto: CreateRelationRecetteDto) {
    return this.relationRecetteService.create(createRelationRecetteDto);
  }

  @Get('/count/:ref_lettrage')
  count(@Param('ref_lettrage') ref_lettrage: string){
    return this.relationRecetteService.countByRef(ref_lettrage)
  }


  @Get('/matched')
  findAll() {
    return this.relationRecetteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relationRecetteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRelationRecetteDto: UpdateRelationRecetteDto) {
    return this.relationRecetteService.update(+id, updateRelationRecetteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relationRecetteService.remove(+id);
  }
}
