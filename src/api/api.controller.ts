import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('api')
export class ApiController {
    constructor(private service: AppService) { }

    @Get('lists')
    getLists() {
        return this.service.getItems();
    }

    @Get('messages')
    async getMessages() {
        return await this.service.getDbMessage();
    }

    @Post('messages')
    async createMessage(@Body() body: any) {
        return await this.service.createDbMessage(body);
    }

}
