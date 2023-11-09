import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoldeService } from './solde.service';
import { CreateSoldeDto } from './dto/create-solde.dto';
import { UpdateSoldeDto } from './dto/update-solde.dto';

@Controller('solde')
export class SoldeController {
  constructor(private readonly soldeService: SoldeService) {}

  @Post()
  create(@Body() createSoldeDto: CreateSoldeDto) {
    return this.soldeService.create(createSoldeDto);
  }

  @Get()
  findAll() {
    return this.soldeService.findAll();
  }

  @Get(':nom')
  findOne(@Param('nom') nom: string) {
    return this.soldeService.findOne(nom);
  }

  @Patch(':nom')
  update(@Param('nom') nom: string, @Body() updateSoldeDto: UpdateSoldeDto) {
    return this.soldeService.update(nom, updateSoldeDto);
  }

}
