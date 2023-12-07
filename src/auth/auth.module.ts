import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AdminModule } from 'src/admin/admin.module';
import { AdminService } from 'src/admin/admin.service';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    AdminService,
    JwtStrategy
  ],
  imports: [
    AdminModule,
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: process.env.SECRET
    })
  ]
})
export class AuthModule {}
