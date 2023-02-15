import { Test, TestingModule } from '@nestjs/testing';
import { TransactionCreateResolver } from './transaction-create.resolver';
import { TransactionCreateService } from './transaction-create.service';

describe('TransactionCreateResolver', () => {
  let resolver: TransactionCreateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionCreateResolver, TransactionCreateService],
    }).compile();

    resolver = module.get<TransactionCreateResolver>(TransactionCreateResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
