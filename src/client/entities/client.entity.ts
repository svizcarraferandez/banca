import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Guid } from 'guid-typescript';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class Client {

  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Identificador de entidad cliente' })
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

  @Column()
  @Field()
  idtypename: string = Guid.create().toString();

}
