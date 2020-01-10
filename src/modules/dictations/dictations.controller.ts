import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDictationsDto } from './dto/dictations.dto';
import { DictationsService } from './dictations.service';
import { Dictation } from './dictations.interface';

@Controller('dictations')
export class DictationsController {
  constructor(private readonly dictationsService: DictationsService) {}

  @Post()
  async create(@Body() createDictationDto: CreateDictationsDto) {
    this.dictationsService.create(createDictationDto);
  }

  @Get()
  async findAll(): Promise<Dictation[]> {
    return this.dictationsService.findAll();
  }
}
