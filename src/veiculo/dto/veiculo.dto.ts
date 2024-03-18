import { ApiProperty } from '@nestjs/swagger';

export class VeiculoDto {
  @ApiProperty({ description: 'Placa do veículo' })
  placa: string;

  @ApiProperty({ description: 'Nome do motorista' })
  motorista: string;

  @ApiProperty({ description: 'Latitude' })
  latitude: string;

  @ApiProperty({ description: 'Longitude' })
  longitude: string;
}
