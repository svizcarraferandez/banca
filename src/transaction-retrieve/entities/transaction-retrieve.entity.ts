import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TransactionRetrieve {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  transactionExternalId: string;



}
