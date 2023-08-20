import { Module } from '@nestjs/common';
import { UserTripService } from './user-trip.service';
import { UserTripController } from './user-trip.controller';

@Module({
  controllers: [UserTripController],
  providers: [UserTripService]
})
export class UserTripModule {}
