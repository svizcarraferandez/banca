import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class TransactionStatus {

  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Identificador' })
  id: number;

  @Column()
  @Field()
  name: string;
}
