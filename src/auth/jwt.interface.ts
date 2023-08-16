export type UserJwtPayload = {
  sub: number;
  email: string;
  name?: string;
  iat?: number;
  exp?: number;
};
