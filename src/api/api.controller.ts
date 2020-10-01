import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('api')
export class ApiController {
    constructor(private service: AppService) { }

    @Get('lists')
    getListMessage() {
        return this.service.getItems();
    }

}
