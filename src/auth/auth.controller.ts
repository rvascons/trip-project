import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma, User } from '@prisma/client';
import { LocalAuthGuard } from './guards/local.guard';
import { IsPublic } from './decorators/isPublic.decorator';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() req: Prisma.UserCreateInput) {
    return this.authService.register(req);
  }

  @IsPublic()
  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async login(@Body() req: Omit<User, 'password'>) {
    return this.authService.login(req);
  }
}
