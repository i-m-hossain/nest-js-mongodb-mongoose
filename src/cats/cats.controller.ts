import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './Interfaces/cat.interface';
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Cat {
    return this.catsService.findOne(id);
  }
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return `Age: ${createCatDto.age}, Name: ${createCatDto.name}, Breed:${createCatDto.breed}`;
  }
  @Put(':id')
  updateCat(@Param('id') id, @Body() updateCatDto: CreateCatDto): string {
    return `cat ${id} is being updated with this data ${updateCatDto.name}`;
  }
  @Delete(':id')
  deleteCat(@Param('id') id): string {
    return `deleted cat with id: ${id}`;
  }
}
