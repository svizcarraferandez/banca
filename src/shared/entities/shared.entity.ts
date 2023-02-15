import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Shared {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
