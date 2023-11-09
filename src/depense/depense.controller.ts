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

  @Get(':id')
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

  @Get('/date/:date')
  async findByDate(@Param('date') date: Date){
    return this.depenseService.findByDate(date);
  }

  @Get('/validation/:isValidate')
  findByValidation(@Param('isValidate') isValidate: string){

    return this.depenseService.findByValidation(JSON.parse(isValidate));
  }

   @Get('/statu/:statu/:isValidate')
   async findByStatu(@Param('statu') statu: string, @Param('isValidate') isValidate: string){
     return this.depenseService.findStatu(statu, JSON.parse(isValidate))
   }
}
