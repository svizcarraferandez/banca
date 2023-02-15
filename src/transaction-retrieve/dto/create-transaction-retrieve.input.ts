import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTransactionRetrieveInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
