import { Injectable } from '@nestjs/common';
import { CreateTransactionRetrieveInput } from './dto/create-transaction-retrieve.input';
import { UpdateTransactionRetrieveInput } from './dto/update-transaction-retrieve.input';

@Injectable()
export class TransactionRetrieveService {
  create(createTransactionRetrieveInput: CreateTransactionRetrieveInput) {
    return 'This action adds a new transactionRetrieve';
  }

  findAll() {
    return `This action returns all transactionRetrieve`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transactionRetrieve`;
  }

  update(id: number, updateTransactionRetrieveInput: UpdateTransactionRetrieveInput) {
    return `This action updates a #${id} transactionRetrieve`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactionRetrieve`;
  }
}
