import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from './user.service';
import { CurrentUser } from 'src/auth/decorators/currentUser.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(
    @Body() userData: { name?: string; email: string; password: string },
  ): Promise<User> {
    return this.userService.create(userData);
  }

  @Get()
  findAll(
    @Param()
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.UserWhereUniqueInput;
      where?: Prisma.UserWhereInput;
      orderBy?: Prisma.UserOrderByWithRelationInput;
    },
  ): Promise<User[]> {
    return this.userService.findAll(params);
  }

  @Get(':id')
  findOne(
    @Param('id') userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.userService.findOne(userWhereUniqueInput);
  }

  @Patch(':id')
  update(
    @Param('id') where: Prisma.UserWhereUniqueInput,
    @Body() data: Prisma.UserUpdateInput,
  ) {
    return this.userService.update(where, data);
  }

  @Delete(':id')
  remove(@Param('id') where: Prisma.UserWhereUniqueInput) {
    return this.userService.remove(where);
  }
}
