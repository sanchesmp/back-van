import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'; // Importe o pacote cors

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configure o CORS para permitir solicitações de todas as origens
  app.use(cors({
    origin: '*', // Permite solicitações de todas as origens
  }));
  await app.listen(3000);
}
bootstrap();
