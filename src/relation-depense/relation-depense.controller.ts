import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelationDepenseService } from './relation-depense.service';
import { CreateRelationDepenseDto } from './dto/create-relation-depense.dto';
import { UpdateRelationDepenseDto } from './dto/update-relation-depense.dto';

@Controller('relation-depense')
export class RelationDepenseController {
  constructor(private readonly relationDepenseService: RelationDepenseService) {}

  @Post()
  create(@Body() createRelationDepenseDto: CreateRelationDepenseDto) {
    return this.relationDepenseService.create(createRelationDepenseDto);
  }

  @Get()
  findAll() {
    return this.relationDepenseService.findAllId();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relationDepenseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRelationDepenseDto: UpdateRelationDepenseDto) {
    return this.relationDepenseService.update(+id, updateRelationDepenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relationDepenseService.remove(+id);
  }

  @Get('/count/:ref_lettrage')
  async count(@Param('ref_lettrage') ref_lettrage: string){
    return this.relationDepenseService.countByRef(ref_lettrage)
  }

  @Get('/matched')
  findMatched(){
    return this.relationDepenseService.findAll()
  }

  @Get('/file')
  findSome(){
    return this.relationDepenseService.findSome()
  }
}
