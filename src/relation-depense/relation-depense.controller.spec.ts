import { Test, TestingModule } from '@nestjs/testing';
import { RelationDepenseController } from './relation-depense.controller';
import { RelationDepenseService } from './relation-depense.service';

describe('RelationDepenseController', () => {
  let controller: RelationDepenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelationDepenseController],
      providers: [RelationDepenseService],
    }).compile();

    controller = module.get<RelationDepenseController>(RelationDepenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
