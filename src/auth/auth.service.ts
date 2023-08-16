import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { Prisma, User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findOne({ email });
    if (user) {
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new Error('Invalid credentials');
  }

  async checkUser(email: string) {
    const user = await this.userService.findOne({ email });
    console.log(user);
    return user ? true : false;
  }

  async register(user: Prisma.UserCreateInput): Promise<User | string> {
    const userExists = await this.checkUser(user.email);
    if (userExists) {
      return 'User already exists';
    } else {
      return await this.userService.create(user);
    }
  }

  async login(user: Omit<User, 'password'>): Promise<{ access_token: string }> {
    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    };
  }
}
