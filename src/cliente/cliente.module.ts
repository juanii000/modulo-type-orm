import { Cliente } from './cliente.entity';
import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cliente
    ])
  ],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
