import { Test, TestingModule } from '@nestjs/testing';
import { RelationDepenseService } from './relation-depense.service';

describe('RelationDepenseService', () => {
  let service: RelationDepenseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelationDepenseService],
    }).compile();

    service = module.get<RelationDepenseService>(RelationDepenseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
