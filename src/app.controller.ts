import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  index() {
    return { message: 'หน้าที่แรกเว็บไซต์' };
  }

  @Get('pages/one')
  @Render('pages/one')
  pageOne() {
    return {
      message: 'หน้าที่หนึ่ง',
      items: this.appService.getItems()
    };
  }

  @Get('pages/two')
  @Render('pages/two')
  pageTwo() {
    return { message: 'หน้าที่สอง' };
  }

  @Get('pages/three')
  @Render('pages/three')
  pageThree() {
    return { message: 'หน้าที่สาม' };
  }
}
