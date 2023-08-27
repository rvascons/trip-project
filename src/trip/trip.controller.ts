import { Body, Controller, Post } from '@nestjs/common';
import { TripService } from './trip.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { CurrentUser } from 'src/auth/decorators/currentUser.decorator';
import { Prisma } from '@prisma/client';

@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Post()
  create(
    @CurrentUser() currentUser,
    @Body() createTripDto: Prisma.TripCreateInput,
  ) {
    const currentUserId = currentUser.id;
    return this.tripService.create(currentUserId, createTripDto);
  }

  // @Get()
  // findAll() {
  //   return this.tripService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tripService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTripDto: UpdateTripDto) {
  //   return this.tripService.update(+id, updateTripDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tripService.remove(+id);
  // }
}
