import { Module } from '@nestjs/common';
import { TransactionRetrieveService } from './transaction-retrieve.service';
import { TransactionRetrieveResolver } from './transaction-retrieve.resolver';

@Module({
  providers: [TransactionRetrieveResolver, TransactionRetrieveService]
})
export class TransactionRetrieveModule {}
