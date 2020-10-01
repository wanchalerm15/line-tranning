import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { LineSdkService } from 'src/line-sdk.service';

@Controller('api')
export class ApiController {
    constructor(
        private service: AppService,
        private line: LineSdkService
    ) { }

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


    @Post('line-message')
    getLimeMessageAPI(@Body() body: any) {
        body.events.forEach((event: any) => {
            this.line.client.replyMessage(event.replyToken, event.message);
            this.service.createDbMessage({
                name: event['source']['userId'],
                message: event.message.text
            } as any)
        });
        return "";
    }

}
