import { Module } from '@nestjs/common';
import { SoldeService } from './solde.service';
import { SoldeController } from './solde.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solde } from './entities/solde.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [SoldeController],
  providers: [SoldeService],
  imports: [
    TypeOrmModule.forFeature([Solde]),
    ConfigModule.forRoot({
      envFilePath: ['.env']
    })
  ],
  exports: [TypeOrmModule]
})
export class SoldeModule {}
