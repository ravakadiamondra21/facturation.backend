import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Admin } from './entities/admin.entity';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(private readonly entityManager: EntityManager,
    @InjectRepository(Admin) private adminRepository: Repository<Admin>)
    {}

  async create(createAdminDto: CreateAdminDto) {
    return this.adminRepository.save(createAdminDto)
  }

  async findAll() {
    return this.adminRepository.find()
  }

  async findOne(mail: string) {
    return this.adminRepository.findOneBy({mail});
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminRepository.findOneBy ({ id });
    admin.nom = updateAdminDto.nom;
    admin.prenom = updateAdminDto.prenom;
    admin.mdp= updateAdminDto.pwd;

    await this.entityManager.save(admin);
    }

  async remove(id: number) {
    return this.adminRepository.delete({id});
  }

  // async hashedPassword(mdp: string) : Promise<string>{
  //   const saltRounds= 10;
  //   return await bcrypt.hash(mdp, saltRounds);
  // }

  async comparePassword(mdp: string, hashedMdp: string): Promise<boolean>{
    return await bcrypt.compare(mdp, hashedMdp);
  }

}
