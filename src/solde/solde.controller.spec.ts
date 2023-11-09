import { Test, TestingModule } from '@nestjs/testing';
import { SoldeController } from './solde.controller';
import { SoldeService } from './solde.service';

describe('SoldeController', () => {
  let controller: SoldeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoldeController],
      providers: [SoldeService],
    }).compile();

    controller = module.get<SoldeController>(SoldeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
