import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway()
export class SocketService {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('events')
    roomEvents(socket: Socket, @MessageBody() body: any) {
        this.server.emit('events', body);
    }
}