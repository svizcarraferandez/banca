import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionStatus } from 'src/transaction-status/entities/transaction-status.entity';
import { TransactionStatusService } from 'src/transaction-status/transaction-status.service';
import { TransactionType } from 'src/transaction-type/entities/transaction-type.entity';
import { TransactionTypeService } from 'src/transaction-type/transaction-type.service';
import { Repository } from 'typeorm';
import { CreateTransactionCreateInput } from './dto/create-transaction-create.input';
import { UpdateTransactionCreateInput } from './dto/update-transaction-create.input';
import { TransactionCreate } from './entities/transaction-create.entity';

@Injectable()
export class TransactionCreateService {


  constructor(@InjectRepository(TransactionCreate)
  private transactionRepository: Repository<TransactionCreate>,
    private transactionTypeService: TransactionTypeService,
    private transactionStatusService: TransactionStatusService
    
  ) {

  }

  async create(createTransactionCreateInput: CreateTransactionCreateInput): Promise<TransactionCreate> {
    const newTransa = this.transactionRepository.create(createTransactionCreateInput);
    return await this.transactionRepository.save(newTransa);
  }

  async findAll(): Promise<TransactionCreate[]> {
    return await this.transactionRepository.find();
  }

  async findOne(transactionExternalId: string): Promise<TransactionCreate> {
    return await this.transactionRepository.findOne({
      where: {
        transactionExternalId,
      },
    });


  }

  async findOneInt(id: number): Promise<TransactionCreate> {
    const obj = await this.transactionRepository.findOne({
      where: {
        id,
      },
    });
    return obj;
  }

  async update(transactionExternalId: string, updateTransactionCreateInput: CreateTransactionCreateInput): Promise<TransactionCreate> {

    const updTrans = this.findOne(transactionExternalId);
    const obj = Object.assign(updTrans, updateTransactionCreateInput);
    console.log(obj.transactionStatusId, "Update los");
    await this.transactionRepository.save(obj);
    return updTrans;
  }

  async getTransactionTypeId(id: number): Promise<TransactionType> {

    return await this.transactionTypeService.findOne(id);
  }

  async getTransactionStatusId(id: number): Promise<TransactionStatus> {

    return await this.transactionStatusService.findOne(id);
  }

  remove(id: number) {
    return `This action removes a  transactionCreate`;
  }
}
