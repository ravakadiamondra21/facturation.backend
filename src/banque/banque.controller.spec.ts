import { Test, TestingModule } from '@nestjs/testing';
import { BanqueController } from './banque.controller';
import { BanqueService } from './banque.service';

describe('BanqueController', () => {
  let controller: BanqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BanqueController],
      providers: [BanqueService],
    }).compile();

    controller = module.get<BanqueController>(BanqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
