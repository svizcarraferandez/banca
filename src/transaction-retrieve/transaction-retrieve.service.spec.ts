import { Test, TestingModule } from '@nestjs/testing';
import { TransactionRetrieveService } from './transaction-retrieve.service';

describe('TransactionRetrieveService', () => {
  let service: TransactionRetrieveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionRetrieveService],
    }).compile();

    service = module.get<TransactionRetrieveService>(TransactionRetrieveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
