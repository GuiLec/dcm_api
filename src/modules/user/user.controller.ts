import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  NotFoundException,
  HttpStatus,
  Put,
  Query,
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

  @Put('/update')
  async updateCustomer(
    @Res() res,
    @Query('userID') userID,
    @Body() createUserDto: CreateUserDto,
  ) {
    console.log();
    const user = await this.userService.updateUser(userID, createUserDto);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
      user,
    });
  }
}
