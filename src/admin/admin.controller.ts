import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import * as bcrypt from 'bcrypt';
import { Admin } from './entities/admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async create(
    @Body() createAdminDto : CreateAdminDto
   ){
     const admin = await this.adminService.create(createAdminDto);
     return admin;
   }
  

  @Get()
  findAll() {
    console.log("findall")
    return this.adminService.findAll();
  }

  @Get(':mail')
  async findOne(@Param('mail') mail: string) {
    console.log("mail")
    return this.adminService.findOne(mail);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }

  
}
