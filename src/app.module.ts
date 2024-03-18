import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {VeiculoModule} from './veiculo/veiculo.module'

@Module({
  imports: [VeiculoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
