import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TransactionRetrieveService } from './transaction-retrieve.service';
import { TransactionRetrieve } from './entities/transaction-retrieve.entity';
import { CreateTransactionRetrieveInput } from './dto/create-transaction-retrieve.input';
import { UpdateTransactionRetrieveInput } from './dto/update-transaction-retrieve.input';

@Resolver(() => TransactionRetrieve)
export class TransactionRetrieveResolver {
  constructor(private readonly transactionRetrieveService: TransactionRetrieveService) {}

  @Mutation(() => TransactionRetrieve)
  createTransactionRetrieve(@Args('createTransactionRetrieveInput') createTransactionRetrieveInput: CreateTransactionRetrieveInput) {
    return this.transactionRetrieveService.create(createTransactionRetrieveInput);
  }

  @Query(() => [TransactionRetrieve], { name: 'transactionRetrieve' })
  findAll() {
    return this.transactionRetrieveService.findAll();
  }

  @Query(() => TransactionRetrieve, { name: 'transactionRetrieve' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.transactionRetrieveService.findOne(id);
  }

  @Mutation(() => TransactionRetrieve)
  updateTransactionRetrieve(@Args('updateTransactionRetrieveInput') updateTransactionRetrieveInput: UpdateTransactionRetrieveInput) {
    return this.transactionRetrieveService.update(updateTransactionRetrieveInput.id, updateTransactionRetrieveInput);
  }

  @Mutation(() => TransactionRetrieve)
  removeTransactionRetrieve(@Args('id', { type: () => Int }) id: number) {
    return this.transactionRetrieveService.remove(id);
  }
}
