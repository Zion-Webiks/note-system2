import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.interface';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>){}
  async create(createUserDto: CreateUserDto): Promise<User>{
    try {
      const hashPass = await bcrypt.hash(createUserDto.password,10)
      const result = new this.userModel({
        username:createUserDto.username, 
        password:hashPass, 
        email:createUserDto.email
      })
      return await result.save()
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findOne(username: string) {
      const user = await this.userModel.findOne({username})
      if(!user) throw new NotFoundException('User not found')
      return user
  }
}
