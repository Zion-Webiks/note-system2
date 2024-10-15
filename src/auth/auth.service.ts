import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Login } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
     private userService: UserService,
     private jwtService: JwtService,
    ){}
  async validateUser(LoginDto: Login): Promise<any>{
    try {
      const user = await this.userService.findOne(LoginDto.username)
      
      const isValidPass = await bcrypt.compare(LoginDto.password, user.password)
      if(!isValidPass) throw new UnauthorizedException("invalid cardential")
      
      const payload = {
        username: user.username,
        id: user._id
      }

      return {
        access_token: this.jwtService.sign(payload)
      }
      
    } catch (error) {
      throw new UnauthorizedException("invalid cardential")
    }
  }
}
