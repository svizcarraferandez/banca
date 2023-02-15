import { Test, TestingModule } from '@nestjs/testing';
import { TransactionCreateService } from './transaction-create.service';

describe('TransactionCreateService', () => {
  let service: TransactionCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionCreateService],
    }).compile();

    service = module.get<TransactionCreateService>(TransactionCreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
