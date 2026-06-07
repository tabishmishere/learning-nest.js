import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get('all')
  async getAllCars() {
    return this.carService.getAllCars();
  }

  @Get(':id')
  async getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carService.getCarById(id);
  }

  @Post('add')
  async addCar(@Body() car: { make: string; model: string; year: number }) {
    return this.carService.addCar(car);
  }
}
