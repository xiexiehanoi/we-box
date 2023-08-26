import { Test, TestingModule } from '@nestjs/testing';
import { usersController } from './users.controller';
import { usersService } from './users.service';

describe('AppController', () => {
  let appController: usersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [usersController],
      providers: [usersService],
    }).compile();

    appController = app.get<usersController>(usersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
