import { Test, TestingModule } from '@nestjs/testing';
import { RelationRecetteService } from './relation-recette.service';

describe('RelationRecetteService', () => {
  let service: RelationRecetteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelationRecetteService],
    }).compile();

    service = module.get<RelationRecetteService>(RelationRecetteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
