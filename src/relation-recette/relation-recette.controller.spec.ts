import { Test, TestingModule } from '@nestjs/testing';
import { RelationRecetteController } from './relation-recette.controller';
import { RelationRecetteService } from './relation-recette.service';

describe('RelationRecetteController', () => {
  let controller: RelationRecetteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelationRecetteController],
      providers: [RelationRecetteService],
    }).compile();

    controller = module.get<RelationRecetteController>(RelationRecetteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
