import { Module } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { DepenseController } from './depense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depense } from './entities/depense.entity';
import { Admin } from 'src/admin/entities/admin.entity';


@Module({
  imports : [TypeOrmModule.forFeature([Depense, Admin])],
  controllers: [DepenseController],
  providers: [DepenseService],
  exports: [DepenseService]
})
export class DepenseModule {}
