import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTripService } from './user-trip.service';
import { CreateUserTripDto } from './dto/create-user-trip.dto';
import { UpdateUserTripDto } from './dto/update-user-trip.dto';

@Controller('user-trip')
export class UserTripController {
  constructor(private readonly userTripService: UserTripService) {}

  @Post()
  create(@Body() createUserTripDto: CreateUserTripDto) {
    return this.userTripService.create(createUserTripDto);
  }

  @Get()
  findAll() {
    return this.userTripService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTripService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTripDto: UpdateUserTripDto) {
    return this.userTripService.update(+id, updateUserTripDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTripService.remove(+id);
  }
}
