import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class VeiculoService {
  constructor(private readonly prisma: PrismaClient) {}

  async atualizarLocalizacao(placa: string, posicaoAtual: { latitude: string; longitude: string }): Promise<any> {
    return this.prisma.veiculo.update({
      where: { // filtra o veículo pela placa
        placa: placa  // Usa a variável placa fornecida diretamente
      },
      data: {  // Dados para atualizar
        latitude: posicaoAtual.latitude,
        longitude: posicaoAtual.longitude,
      },
    });
  }


  async pegarLocalizacao(placa: string): Promise<any> {
    return this.prisma.veiculo.findUnique({ // Use findUnique em vez de select
      where: {
        placa: placa
      },
      select: { // Selecione apenas latitude e longitude
        latitude: true,
        longitude: true
      }
    });
  }


  
}
