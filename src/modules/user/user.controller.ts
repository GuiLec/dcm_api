import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }

  @Get('/:userID')
  async getUser(@Res() res, @Param('userID') userID): Promise<User> {
    const user = await this.userService.getUser(userID);
    if (!user) throw new NotFoundException('No user found with this ID!');
    return res.status(HttpStatus.OK).json(user);
  }
}
