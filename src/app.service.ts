import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  /** ส่งค่าข้อมูลเป็น Array string */
  getItems(): Array<string> {
    const items: string[] = [];
    for (let index = 1; index <= 100; index++) items.push(`Random Id : ${Math.random()}`)
    return items;
  }
}
