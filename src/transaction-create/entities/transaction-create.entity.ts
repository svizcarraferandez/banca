import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Guid } from 'guid-typescript';
import { type } from 'os';
import { TransactionType } from 'src/transaction-type/entities/transaction-type.entity';
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class TransactionCreate {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Identidicador de la tabla)' })
  id: number;

 // @PrimaryColumn()
  @Column()
  @Field()
  transactionExternalId: string = Guid.create().toString();

  @Column({type: 'text', nullable: true})
  @Field({nullable: true})
  accountExternalIdDebit: string;

  @Column({type: 'text', nullable: true})
  @Field({nullable: true})
  accountExternalIdCredit: string;

  @Column()
  @Field(() => Int)
  tranferTypeId: Number;

  @Column()
  @Field(() => Int)
  value: Number;

  @Column()
  @Field((type) => Int)
  transactionStatusId: Number = 1;

  @Column()
  @Field((type) => Int)
  transactionTypeId: number = 1;

  // @Column()
  // @Field()
  // createdAt: Date = new Date();

  @ManyToOne(() => TransactionType, transactionType => transactionType.transactionCreate)
    @Field((type) => Int)
    transactionType: TransactionType;

}
