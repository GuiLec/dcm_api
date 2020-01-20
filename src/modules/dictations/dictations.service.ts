import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Dictation } from './dictations.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDictationsDto } from './dto';

@Injectable()
export class DictationsService {
  constructor(
    @InjectModel('Dictations')
    private readonly dictationModel: Model<Dictation>,
  ) {}

  async create(createDictationsDto: CreateDictationsDto): Promise<Dictation> {
    const createdDictation = new this.dictationModel(createDictationsDto);
    return await createdDictation.save();
  }

  async getAuthorDictations(authorID): Promise<Dictation[]> {
    const dictations = await this.dictationModel
      .find({ 'author.id': authorID })
      .exec();
    return dictations;
  }

  async findAll(): Promise<Dictation[]> {
    return await this.dictationModel.find().exec();
  }
}
