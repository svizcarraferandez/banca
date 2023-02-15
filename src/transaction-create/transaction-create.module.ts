import { Module } from '@nestjs/common';
import { TransactionCreateService } from './transaction-create.service';
import { TransactionCreateResolver } from './transaction-create.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionCreate } from './entities/transaction-create.entity';
import { TransactionAntiFraud } from './anti-fraud/transaction-anti-fraud';
import { TransactionTypeModule } from 'src/transaction-type/transaction-type.module';
import { TransactionStatusModule } from 'src/transaction-status/transaction-status.module';

@Module({
  imports:[TypeOrmModule.forFeature([TransactionCreate]), TransactionTypeModule, TransactionStatusModule ],
  providers: [TransactionCreateResolver, TransactionCreateService,TransactionAntiFraud]
})
export class TransactionCreateModule {}
