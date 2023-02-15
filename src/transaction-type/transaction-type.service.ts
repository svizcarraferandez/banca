import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionTypeInput } from './dto/create-transaction-type.input';
import { UpdateTransactionTypeInput } from './dto/update-transaction-type.input';
import { TransactionType } from './entities/transaction-type.entity';

@Injectable()
export class TransactionTypeService {

  constructor(@InjectRepository(TransactionType)
  private transactionTypeRepository: Repository<TransactionType>) { }

  async create(createTransactionTypeInput: CreateTransactionTypeInput): Promise<TransactionType> {
    const newClient = this.transactionTypeRepository.create(createTransactionTypeInput);
    return await this.transactionTypeRepository.save(newClient);
  }

  async findAll(): Promise<TransactionType[]> {
    return await this.transactionTypeRepository.find();
  }

  async findOne(id: number): Promise<TransactionType> {
    return await this.transactionTypeRepository.findOne({
      where:{
        id,
      },
    });
  }

  update(id: number, updateTransactionTypeInput: UpdateTransactionTypeInput) {
    return `This action updates a #${id} transactionType`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactionType`;
  }
}
