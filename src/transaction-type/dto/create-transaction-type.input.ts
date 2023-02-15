import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateTransactionTypeInput {
 
  @Column()
  @Field()
  name: string;
}
