import { CreateSharedInput } from './create-shared.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSharedInput extends PartialType(CreateSharedInput) {
  @Field(() => Int)
  id: number;
}
