import { Module } from '@nestjs/common';
import { UserTripService } from './user-trip.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UserTripService, PrismaService],
})
export class UserTripModule {}
