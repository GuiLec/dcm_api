import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictationsModule } from './modules/dictations/dictations.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './modules/cats/cats.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    DictationsModule,
    CatsModule,
    UserModule,
    MongooseModule.forRoot(
      //'mongodb://localhost/nest'),
      'mongodb+srv://gui:29041990@cluster0-8chcq.mongodb.net/dcm?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
