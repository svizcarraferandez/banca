import { Test, TestingModule } from '@nestjs/testing';
import { TransactionRetrieveResolver } from './transaction-retrieve.resolver';
import { TransactionRetrieveService } from './transaction-retrieve.service';

describe('TransactionRetrieveResolver', () => {
  let resolver: TransactionRetrieveResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionRetrieveResolver, TransactionRetrieveService],
    }).compile();

    resolver = module.get<TransactionRetrieveResolver>(TransactionRetrieveResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
