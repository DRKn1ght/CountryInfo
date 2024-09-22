import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const iso3 = require('country-iso-2-to-3')
    console.log(iso3("UA"))
    return 'Hello World!';
  }
}
