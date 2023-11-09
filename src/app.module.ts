import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { join } from 'path';
import { RecetteModule } from './recette/recette.module';
import { DepenseModule } from './depense/depense.module';
import { AuthModule } from './auth/auth.module';
import { SoldeModule } from './solde/solde.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
    imports:[ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type : 'mysql',
      host : configService.get('HOST'),
      port: +configService.get('PORT'),
      username: configService.get('USER'),
      password: configService.get('PASSWORD'),
      database: configService.get('DATABASE'),
      entities: [join(process.cwd(), 'dist/**/*.entity.js')],
      synchronize: true
    }),
    inject : [ConfigService]
  }),
    AdminModule,
    RecetteModule,
    DepenseModule,
    AuthModule,
    SoldeModule,
  
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
