import { Module } from '@nestjs/common';
import { DictationsController } from './dictations.controller';
import { DictationsService } from './dictations.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DictationSchema } from './dictations.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Dictations', schema: DictationSchema },
    ]),
  ],
  controllers: [DictationsController],
  providers: [DictationsService],
})
export class DictationsModule {}
