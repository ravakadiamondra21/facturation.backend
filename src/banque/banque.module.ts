import { Module } from '@nestjs/common';
import { BanqueService } from './banque.service';
import { BanqueController } from './banque.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banque } from './entities/banque.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Banque])],
  controllers: [BanqueController],
  providers: [BanqueService],
  
})
export class BanqueModule {}
