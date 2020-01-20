import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async getUser(userID): Promise<User> {
    const user = await this.userModel.findOne({ id: userID }).exec();
    return user;
  }
}
