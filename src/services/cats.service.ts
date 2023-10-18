import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: Array<Cat> = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Array<Cat> {
    return this.cats;
  }
}
