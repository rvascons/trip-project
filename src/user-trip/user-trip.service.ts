import { Injectable } from '@nestjs/common';
import { CreateUserTripDto } from './dto/create-user-trip.dto';
import { UpdateUserTripDto } from './dto/update-user-trip.dto';

@Injectable()
export class UserTripService {
  create(createUserTripDto: CreateUserTripDto) {
    return 'This action adds a new userTrip';
  }

  findAll() {
    return `This action returns all userTrip`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userTrip`;
  }

  update(id: number, updateUserTripDto: UpdateUserTripDto) {
    return `This action updates a #${id} userTrip`;
  }

  remove(id: number) {
    return `This action removes a #${id} userTrip`;
  }
}
