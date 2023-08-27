import { Injectable } from '@nestjs/common';
import { Prisma, Trip } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TripService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, data: Prisma.TripCreateInput): Promise<Trip> {
    const trip = await this.prisma.trip.create({ data });

    const userTripData: Prisma.UserTripCreateInput = {
      user: { connect: { id: userId } },
      trip: { connect: { id: trip.id } },
    };
    const userTrip = await this.prisma.userTrip.create({ data: userTripData });

    const userData: Prisma.UserUpdateInput = {
      userTrips: { connect: { id: userTrip.id } },
    };

    await this.prisma.user.update({ where: { id: userId }, data: userData });

    const tripData: Prisma.TripUpdateInput = {
      userTrips: { connect: { id: userTrip.id } },
    };

    await this.prisma.trip.update({ where: { id: trip.id }, data: tripData });

    return trip;
  }

  // findAll() {
  //   return `This action returns all trip`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} trip`;
  // }

  // update(id: number, updateTripDto: UpdateTripDto) {
  //   return `This action updates a #${id} trip`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} trip`;
  // }
}
