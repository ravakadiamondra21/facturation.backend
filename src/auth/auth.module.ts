import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminModule } from 'src/admin/admin.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { AdminService } from 'src/admin/admin.service';

@Module({
  imports: [
    AdminModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s'},
    })
  ],
  providers: [AuthService, AdminService],
  controllers: [AuthController],
  exports: [AdminService, AuthService]
})
export class AuthModule {}
