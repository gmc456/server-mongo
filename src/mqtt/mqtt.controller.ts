import { Controller, HttpService } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MqttService } from './mqtt.service';
import { CreateRecognizedObjectDto } from './dto/create-recognizedObjects.dto';
import { Logger } from '@nestjs/common';

@Controller('math')
export class MqttController {
    /* constructor( */
    /*     private readonly httpService: HttpService, */
    /* ) {} */

    constructor(private readonly mqttService: MqttService) {}
    
    /* @MessagePattern('add_user') */
    /* addUser(@Payload() data) { */
    /*     return this.httpService.post(`http://localhost:3000/users`, data); */
    /* } */
    /* @MessagePattern('add_book') */
    /* addBook(@Payload() data) { */
    /*     return this.httpService.post(`http://localhost:3000/books`, data); */
    /* } */

    @MessagePattern('python/mqtt')
    addObject(@Payload() data) {
        return this.mqttService.create(data);

        //return this.httpService.post(`http://localhost:3000/recognizedObjects`, data);
    }
}