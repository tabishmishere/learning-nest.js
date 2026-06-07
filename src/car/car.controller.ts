import { Controller, Get } from '@nestjs/common';
import { CarService } from './car.service';
@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get('all')
  async getAllCars() {
    return this.carService.getAllCars();
  }
}
