import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { ConfigModule } from '@nestjs/config';


@Module({
  controllers: [AdminController],
  providers: [AdminService],
  imports: [TypeOrmModule.forFeature([Admin]),
            ConfigModule.forRoot({
              envFilePath: ['.env']
            })],
  exports: [TypeOrmModule]
})
export class AdminModule {}
