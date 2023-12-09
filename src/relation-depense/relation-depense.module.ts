import { Module } from '@nestjs/common';
import { RelationDepenseService } from './relation-depense.service';
import { RelationDepenseController } from './relation-depense.controller';
import { DepenseService } from 'src/depense/depense.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationDepense } from './entities/relation-depense.entity';
import { Banque } from 'src/banque/entities/banque.entity';
import { Depense } from 'src/depense/entities/depense.entity';
import { Admin } from 'src/admin/entities/admin.entity';

@Module({
  controllers: [RelationDepenseController],
  providers: [RelationDepenseService, DepenseService],
  imports: [TypeOrmModule.forFeature([RelationDepense, Banque, Depense, Admin])]
})
export class RelationDepenseModule {}
