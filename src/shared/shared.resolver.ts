import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SharedService } from './shared.service';
import { Shared } from './entities/shared.entity';
import { CreateSharedInput } from './dto/create-shared.input';
import { UpdateSharedInput } from './dto/update-shared.input';

@Resolver(() => Shared)
export class SharedResolver {
  constructor(private readonly sharedService: SharedService) {}

  @Mutation(() => Shared)
  createShared(@Args('createSharedInput') createSharedInput: CreateSharedInput) {
    return this.sharedService.create(createSharedInput);
  }

  @Query(() => [Shared], { name: 'shared' })
  findAll() {
    return this.sharedService.findAll();
  }

  @Query(() => Shared, { name: 'shared' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sharedService.findOne(id);
  }

  @Mutation(() => Shared)
  updateShared(@Args('updateSharedInput') updateSharedInput: UpdateSharedInput) {
    return this.sharedService.update(updateSharedInput.id, updateSharedInput);
  }

  @Mutation(() => Shared)
  removeShared(@Args('id', { type: () => Int }) id: number) {
    return this.sharedService.remove(id);
  }
}
