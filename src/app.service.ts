import { Injectable, Inject } from '@nestjs/common';
import { SETTINGS } from './constant';

@Injectable()
export class AppService {

  constructor(@Inject(SETTINGS) private settings :  {name : string}){
    console.log(settings)
  }
  getHello(): string {
    console.log(this.settings)
    return 'Hello World!';
  }
}
