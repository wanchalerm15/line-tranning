import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocketService } from './socket.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      username: 'sa',
      password: 'Avesta1234!',
      database: 'nestjs',
      options: {
        enableArithAbort: false
      },
      entities: ["dist/**/*.entity{.ts,.js}"],
    })
  ],
  controllers: [AppController, ApiController],
  providers: [
    AppService,
    SocketService
  ],
})
export class AppModule { }
