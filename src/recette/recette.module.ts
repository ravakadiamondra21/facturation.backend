import { Module } from '@nestjs/common';
import { RecetteService } from './recette.service';
import { RecetteController } from './recette.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recette } from './entities/recette.entity';
import { Admin } from 'src/admin/entities/admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recette, Admin])],
  controllers: [RecetteController],
  providers: [RecetteService],
  
})
export class RecetteModule {}
