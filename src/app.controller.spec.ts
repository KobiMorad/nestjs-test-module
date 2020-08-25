import * as testing from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const serviceMock =  ({
  getHello : jest.fn(()=> "Hello World!")
});

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  
  beforeEach(async () => {
    const app: testing.TestingModule = await testing.Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide : AppService,
          useFactory : ()=>  serviceMock
        }
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);    
    
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      serviceMock.getHello.mockReturnValue("Hello World!")
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

