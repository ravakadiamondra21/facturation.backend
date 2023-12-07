import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    });
  }

  // async validate(payload: any) {
  //   if (!payload) {
  //     throw new UnauthorizedException();
  //   }
  //   return payload;
  // }

  async validate(playload: any){
    return await this.authService.validateUserBy(playload.mail);
  }
}