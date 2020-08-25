import { Module, DynamicModule } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { SETTINGS } from './constant';

@Module({})
export class TestModule {
  
static forRoot(options : {name : string}) : DynamicModule{
   return {
      module : TestModule,
      controllers : [AppController],
      providers : [
        {
          provide : SETTINGS,
          useValue : options
        },        
        AppService
      ],
      exports : [AppService]
   }

}
}