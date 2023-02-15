import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionStatusInput } from './dto/create-transaction-status.input';
import { UpdateTransactionStatusInput } from './dto/update-transaction-status.input';
import { TransactionStatus } from './entities/transaction-status.entity';

@Injectable()
export class TransactionStatusService {

  constructor(@InjectRepository(TransactionStatus)
  private transactionStatusRepository: Repository<TransactionStatus>) { }

  async create(createTransactionStatusInput: CreateTransactionStatusInput): Promise<TransactionStatus> {
    const newStatus = this.transactionStatusRepository.create(createTransactionStatusInput);
    return  await this.transactionStatusRepository.save(newStatus);
  }

 async findAll(): Promise<TransactionStatus[]> {
    return await this.transactionStatusRepository.find();
  }

  async findOne(id: number): Promise<TransactionStatus> {
    return await this.transactionStatusRepository.findOne({
      where:{
        id,
      },
    });
  }

  update(id: number, updateTransactionStatusInput: UpdateTransactionStatusInput) {
    return `This action updates a #${id} transactionStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactionStatus`;
  }
}
