import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Strategy } from 'passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './auth/jwt.strategy';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}

    @Post('login')
    @UseGuards(AuthGuard('jwt'))
    async login(@Request() req) {
        return this.authService.login(req.admin)
    }
}
