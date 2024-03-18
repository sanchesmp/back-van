import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do CORS para permitir solicitações de todas as origens
  app.use(cors({
    origin: true, // Permitir solicitações de todas as origens
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  }));

  await app.listen(3000);
}
bootstrap();
