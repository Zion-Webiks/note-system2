import { Injectable, NotFoundException } from '@nestjs/common';
import { Login } from './dto/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/entities/user.interface';


@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<User>){}
  async validateUser(LoginDto: Login) {
    //find user
    const result = await this.userModel.findOne({username:LoginDto.username})
    if(!result) throw new NotFoundException('User not found')
    // compare 
    const 

    // token or error

    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
