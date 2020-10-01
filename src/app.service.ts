import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { MessageEntity } from './entities/message.entity';

@Injectable()
export class AppService {
  constructor(private connection: Connection) {
    this.messageRepo = connection.getRepository(MessageEntity);
  }

  private messageRepo: Repository<MessageEntity>;

  getHello(): string {
    return 'Hello World!';
  }

  /** ส่งค่าข้อมูลเป็น Array string */
  getItems(): Array<string> {
    const items: string[] = [];
    for (let index = 1; index <= 100; index++) items.push(`Random Id : ${Math.random()}`)
    return items;
  }

  /** ส่งข้อมูลจากฐานข้อมูล */
  getDbMessage() {
    return this.messageRepo.find({ order: { id: 'DESC' } });
  }

  /** สร้าง message */
  createDbMessage(value: MessageEntity) {
    const entity = new MessageEntity();
    entity.name = value.name;
    entity.message = value.message;
    return entity.save();
  }
}
