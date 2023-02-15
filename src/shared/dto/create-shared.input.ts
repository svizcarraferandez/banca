import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSharedInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
