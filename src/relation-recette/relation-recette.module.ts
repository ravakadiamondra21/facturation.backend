import { Module } from '@nestjs/common';
import { RelationRecetteService } from './relation-recette.service';
import { RelationRecetteController } from './relation-recette.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationRecette } from './entities/relation-recette.entity';
import { Banque } from 'src/banque/entities/banque.entity';
import { Recette } from 'src/recette/entities/recette.entity';
import { Admin } from 'src/admin/entities/admin.entity';

@Module({
  controllers: [RelationRecetteController],
  providers: [RelationRecetteService],
  imports: [TypeOrmModule.forFeature([RelationRecette, Banque, Recette, Admin])]
})
export class RelationRecetteModule {}
