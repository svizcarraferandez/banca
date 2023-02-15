import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { TransactionCreateService } from './transaction-create.service';
import { TransactionCreate } from './entities/transaction-create.entity';
import { CreateTransactionCreateInput } from './dto/create-transaction-create.input';
import { UpdateTransactionCreateInput } from './dto/update-transaction-create.input';
import { TransactionAntiFraud } from './anti-fraud/transaction-anti-fraud';
import { TransactionType } from 'src/transaction-type/entities/transaction-type.entity';
import { TransactionStatus } from 'src/transaction-status/entities/transaction-status.entity';

@Resolver(() => TransactionCreate)
export class TransactionCreateResolver {

  constructor(private readonly transactionCreateService: TransactionCreateService,
    private transactionAntiFraud: TransactionAntiFraud
  ) { }

  @Mutation(() => TransactionCreate)
  createTransactionCreate(@Args('createTransactionCreateInput') createTransactionCreateInput: CreateTransactionCreateInput) {
    const val = this.transactionCreateService.create(createTransactionCreateInput).then(value => {
      console.log(value.transactionStatusId, "Save trh");
      const val = this.transactionAntiFraud.Valida_Anti_Fraud(value);
      return this.transactionCreateService.update(value.transactionExternalId, val);
    });
    //console.log(val, "save fin");
    return val;
  }

  @Query(() => [TransactionCreate], { name: 'transactionCreateAll' })
  findAll() {
    return this.transactionCreateService.findAll();
  }

  @Query(() => TransactionCreate, { name: 'transactionCreateById' })
  findOne(@Args('transactionExternalId', { type: () => Int }) transactionExternalId: string) {
    return this.transactionCreateService.findOne(transactionExternalId);
  }

  @Query(() => TransactionCreate, { name: 'transactionCreateByIdInt' })
  findOneInt(@Args('id', { type: () => Int }) id: number) {
    return this.transactionCreateService.findOneInt(id);
  }

  @Mutation(() => TransactionCreate)
  updateTransactionCreate(@Args('updateTransactionCreateInput') updateTransactionCreateInput: CreateTransactionCreateInput) {


    return this.transactionCreateService.update("", updateTransactionCreateInput);
  }

  @Mutation(() => TransactionCreate)
  removeTransactionCreate(@Args('id', { type: () => Int }) id: number) {
    return this.transactionCreateService.remove(id);
  }


  @ResolveField((returns) => TransactionType, { name: 'getTransactionType' })
  getTransactionType(@Parent() posst: TransactionCreate): Promise<TransactionType> {
    return this.transactionCreateService.getTransactionTypeId(posst.transactionTypeId);
  }

  @ResolveField((returns) => TransactionStatus, { name: 'getTransactionStatus' })
  getTransactionStatus(@Parent() posstStatus: TransactionCreate): Promise<TransactionStatus> {
    return this.transactionCreateService.getTransactionStatusId(posstStatus.transactionTypeId);
  }

}
