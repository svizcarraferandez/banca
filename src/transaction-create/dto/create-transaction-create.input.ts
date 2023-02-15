import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateTransactionCreateInput {
 
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

  @Column()
  @Field(() => Int)
  transactionStatusId: Number;
  
}
