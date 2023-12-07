import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { BanqueService } from './banque.service';
import { CreateBanqueDto } from './dto/create-banque.dto';
import { UpdateBanqueDto } from './dto/update-banque.dto';


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

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.banqueService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBanqueDto: UpdateBanqueDto) {
    return this.banqueService.update(+id, updateBanqueDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.banqueService.remove(+id);
  // }

  @Get("/count/:ref_lettrage")
  async count(@Param("ref_lettrage") ref_lettrage: string){
    return this.banqueService.countByRef(ref_lettrage);
  }
}
