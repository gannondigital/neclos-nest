import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service.js';
import { Prisma, User as UserModel } from '../../generated/prisma/client.js';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel|null> {
    return this.userService.getUser({ id });
  }

  @Post('users')
  async createUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: Prisma.UserUpdateInput,
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: {
        id,
      },
      data: userData,
    });
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel|null> {
    const userToDelete = await this.userService.getUser({ id });
    /* TODO soft delete */
    await this.userService.deleteUser({
      id,
    });
    return userToDelete;
  }
}
