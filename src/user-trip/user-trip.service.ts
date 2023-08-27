import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserTripService {
  constructor(private prisma: PrismaService) {}
  // create(createUserTripDto: CreateUserTripDto) {
  //   return 'This action adds a new userTrip';
  // }
  // findAll() {
  //   return `This action returns all userTrip`;
  // }
  async findOne(userId: number, tripId: number) {
    return await this.prisma.userTrip.findUnique({
      where: {
        userId_tripId: {
          userId,
          tripId,
        },
      },
    });
  }
}
// update(id: number, updateUserTripDto: UpdateUserTripDto) {
//   return `This action updates a #${id} userTrip`;
// }
// remove(id: number) {
//   return `This action removes a #${id} userTrip`;
// }
