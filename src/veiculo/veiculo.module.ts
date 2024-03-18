import { Module } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { VeiculoController } from './veiculo.controller';
import { PrismaClient } from '@prisma/client';


@Module({
  controllers: [VeiculoController],
  providers: [VeiculoService, PrismaClient],
})
export class VeiculoModule {}
