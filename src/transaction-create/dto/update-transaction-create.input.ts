import { CreateTransactionCreateInput } from './create-transaction-create.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdateTransactionCreateInput extends PartialType(CreateTransactionCreateInput) {
 
  @Column()
  @Field()
  transactionExternalId: string;

  @Column({type: 'text', nullable: true})
  @Field({nullable: true})
  accountExternalIdDebit: string;

  @Column({type: 'text', nullable: true})
  @Field({nullable: true})
  accountExternalIdCredit: string;

  @Column()
  @Field(() => Int)
  tranferTypeId: Number;

  @Column()
  @Field(() => Int)
  value: Number;
}
