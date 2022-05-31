import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './Interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      id: 'sdlfds3e423lswj',
      name: 'cat 1',
      breed: 'sflsdf',
      age: 1,
    },
    {
      id: 'dfgdfgdfgdf34e534',
      name: 'cat 2',
      breed: 'sflsdf',
      age: 2,
    },
    {
      id: '234234dtgfdfgdftygtyret',
      name: 'cat 3',
      breed: 'sflsdf',
      age: 3,
    },
    {
      id: 'sdlfds3e4sdfsdw3er4323lswj',
      name: 'cat 4',
      breed: 'sfsdflsdf',
      age: 2,
    },
  ];

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: string): Cat {
    return this.cats.find((item) => item.id === id);
  }
}
