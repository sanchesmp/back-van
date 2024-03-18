import { Controller, Post, Body, Get } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { PrismaClient } from "@prisma/client";


@Controller('veiculo')
export class VeiculoController {
  constructor(private readonly veiculoService: VeiculoService) {}

  @Post('atualizar-localizacao')
  async atualizarLocalizacao(@Body() body: { placa: string; posicaoAtual: { latitude: string; longitude: string } }): Promise<any> {
    const { placa, posicaoAtual } = body;
    return this.veiculoService.atualizarLocalizacao(placa, posicaoAtual);
  }

  @Post('localizar-veiculo')
  async pegarLocalizacao(@Body() body: { placa: string;}): Promise<any> {
    const { placa } = body;
    return this.veiculoService.pegarLocalizacao(placa);
  }
}
