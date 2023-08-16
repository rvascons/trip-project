import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserJwtPayload } from '../jwt.interface';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${process.env.TOKEN_SECRET}`,
    });
  }

  async validate(payload: UserJwtPayload): Promise<Omit<User, 'password'>> {
    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
    };
  }
}
