import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateTransactionStatusInput {
  
  @Column()
  @Field()
  name: string;
}
