import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictationsModule } from './modules/dictations/dictations.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './modules/cats/cats.module';

@Module({
  imports: [
    DictationsModule,
    CatsModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
