import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log(1);
  }

  @Get()
  @Render('index')
  home() {
    return { a: 1 };
  }
}
