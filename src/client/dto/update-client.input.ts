import { CreateClientInput } from './create-client.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdateClientInput extends PartialType(CreateClientInput) {
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  last_name: string;

  @Column()
  @Field()
  address: string;

}
