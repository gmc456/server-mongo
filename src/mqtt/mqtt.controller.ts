import { Controller, HttpService } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MqttService } from './mqtt.service';
import { CreateRecognizedObjectDto } from './dto/create-recognizedObjects.dto';
import { Logger } from '@nestjs/common';

@Controller('math')
export class MqttController {

    constructor(private readonly mqttService: MqttService) {}
    
    @MessagePattern('python/mqtt')
    addObject(@Payload() data) {
        return this.mqttService.create(data);
    }
}