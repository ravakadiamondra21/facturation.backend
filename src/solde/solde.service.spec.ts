import { Test, TestingModule } from '@nestjs/testing';
import { SoldeService } from './solde.service';

describe('SoldeService', () => {
  let service: SoldeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoldeService],
    }).compile();

    service = module.get<SoldeService>(SoldeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
