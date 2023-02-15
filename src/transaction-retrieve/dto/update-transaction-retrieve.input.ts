import { CreateTransactionRetrieveInput } from './create-transaction-retrieve.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTransactionRetrieveInput extends PartialType(CreateTransactionRetrieveInput) {
  @Field(() => Int)
  id: number;
}
