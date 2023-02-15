import { ObjectType, Field, Int } from '@nestjs/graphql';
import { TransactionCreate } from 'src/transaction-create/entities/transaction-create.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class TransactionType {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Identificador' })
  id: number;

  @Column()
  @Field()
  name: string;


  @OneToMany(() => TransactionCreate, (transactionCreate) => transactionCreate.tranferTypeId)
  @Field(() => [TransactionCreate], {nullable: true})
  transactionCreate: TransactionCreate[];

}
