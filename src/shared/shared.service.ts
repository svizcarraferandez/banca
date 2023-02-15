import { Injectable } from '@nestjs/common';
import { CreateSharedInput } from './dto/create-shared.input';
import { UpdateSharedInput } from './dto/update-shared.input';

@Injectable()
export class SharedService {
  create(createSharedInput: CreateSharedInput) {
    return 'This action adds a new shared';
  }

  findAll() {
    return `This action returns all shared`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shared`;
  }

  update(id: number, updateSharedInput: UpdateSharedInput) {
    return `This action updates a #${id} shared`;
  }

  remove(id: number) {
    return `This action removes a #${id} shared`;
  }
}
