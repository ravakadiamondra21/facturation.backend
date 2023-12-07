import { Injectable, Param } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Admin } from 'src/admin/entities/admin.entity';
import * as bcrypt from 'bcrypt'
import { AdminService } from 'src/admin/admin.service';


@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService,
                private adminService : AdminService){}

    async generateToken(playload: any) : Promise<string>{
        return this.jwtService.sign(playload);
    }

    // async validateAdmin(mail: string, password: string): Promise<Admin | null> {
    //     const admin = await this.adminService.findOne(mail)

    //     if(admin && (await bcrypt.compare(password, admin.mdp))){
    //         return admin;
    //     }
    //     return null;
    // }

    // async login({mdp, ...admin}: Admin): Promise<AdminResponseDto>{
    //     return{
    //         token: this.jwtService.sign({mail: admin.mail}), admin
    //     }
    // }

    async validateUser(mail : string, mdp: string): Promise<any>{
        const user = await this.adminService.findOne(mail);

        if(user && (await this.adminService.comparePassword(mdp, user.mdp))) {
            const {mdp, ...result} = user;
            return result
        }

        return null;
    }

    async validateUserBy(mail: string) : Promise<any> {
        return await this.adminService.findOne(mail)
    }

    async login(admin: Admin)  {
        const playload = {mail : admin.mail, pwd : admin.mdp}
        const accessToken = this.jwtService.sign(playload)
        return {accessToken}
        console.log(admin)
    }
}
