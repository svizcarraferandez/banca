import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateClientInput {
 
  
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
