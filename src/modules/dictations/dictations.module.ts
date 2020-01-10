import { Module } from '@nestjs/common';
import { DictationsController } from './dictations.controller';
import { DictationsService } from './dictations.service';

@Module({
  controllers: [DictationsController],
  providers: [DictationsService],
})
export class DictationsModule {}
