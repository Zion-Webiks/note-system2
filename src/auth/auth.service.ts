import { Injectable, NotFoundException } from '@nestjs/common';
import { Login } from './dto/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/entities/user.interface';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
  constructor(
     private userService: UserService
    ){}
  async validateUser(LoginDto: Login) {
    //find user
    
    // compare 


    // token or error

    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

 

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
