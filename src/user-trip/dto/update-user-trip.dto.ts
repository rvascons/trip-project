import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTripDto } from './create-user-trip.dto';

export class UpdateUserTripDto extends PartialType(CreateUserTripDto) {}