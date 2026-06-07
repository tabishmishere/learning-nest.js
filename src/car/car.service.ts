import { Injectable, NotFoundException } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {
  private cars = CARS;

  //   Get all cars
  public async getAllCars() {
    return this.cars;
  }

  //   Get a car by its ID
  public async getCarById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    return car;
  }

  // Add a new car to the list
  public async addCar(car: { make: string; model: string; year: number }) {
    const newCar = { id: this.cars.length + 1, ...car };
    this.cars.push(newCar);
    return { message: 'Car Saved Successfully' };
  }
}
