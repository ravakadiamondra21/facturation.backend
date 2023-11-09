import { Dependencies, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
@Dependencies(AdminService)
export class AuthService {
    adminService
    constructor(adminService: AdminService, private jwtService: JwtService){
        this.adminService = adminService;
    }

    async login(mail: string, pwd: string){
        const admin = await this.adminService.findOne(mail);
        if(admin?.mdp !== pwd){
            throw new UnauthorizedException()
        }
        const playload = {mail: admin.mail, mdp: admin.mdp};
        return{
            access_token: await this.jwtService.signAsync(admin.mail, admin.mdp)
        }
    }
}
