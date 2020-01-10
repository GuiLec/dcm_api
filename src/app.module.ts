import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictationsModule } from './modules/dictations/dictations.module';

@Module({
  imports: [DictationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
