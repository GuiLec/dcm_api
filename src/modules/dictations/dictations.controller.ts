import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
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

  @Get('author/:authorID')
  async getAuthorDictations(@Res() res, @Param('authorID') authorID) {
    if (authorID === 'public') {
      const publicDictations = await this.dictationsService.getPublicDictations();
      return res.status(HttpStatus.OK).json(publicDictations);
    }
    const dictations = await this.dictationsService.getAuthorDictations(
      authorID,
    );
    if (!dictations) throw new NotFoundException('No such dictation!');
    return res.status(HttpStatus.OK).json(dictations);
  }

  @Get('/:language/:difficulties')
  async getPreferedDictation(
    @Res() res,
    @Param('language') language,
    @Param('difficulties') difficulties,
  ) {
    const dictations = await this.dictationsService.getPreferedDictation(
      language,
      difficulties,
    );
    if (!dictations) throw new NotFoundException('No such prefered dictation!');
    return res.status(HttpStatus.OK).json(dictations);
  }
}
