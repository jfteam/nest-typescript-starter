import {WebSocketGateway} from '@nestjs/websockets';

@WebSocketGateway({
    port:81,
    namespace:'user'
})
export class UserGateway{

}