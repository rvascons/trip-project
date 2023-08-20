import { Test, TestingModule } from '@nestjs/testing';
import { UserTripController } from './user-trip.controller';
import { UserTripService } from './user-trip.service';

describe('UserTripController', () => {
  let controller: UserTripController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTripController],
      providers: [UserTripService],
    }).compile();

    controller = module.get<UserTripController>(UserTripController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
