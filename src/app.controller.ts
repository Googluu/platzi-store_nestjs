import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Get
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo!';
  }

  @Get('/ruta/')
  nuevo() {
    return 'con /sas/';
  }
}
