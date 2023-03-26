import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MqttController } from './mqtt.controller';
import { MqttService } from './mqtt.service';
import { RecognizedObject, RecognizedObjectSchema } from './schemas/recognizedObjects.schema';

@Module({
  imports: [HttpModule, 
    MongooseModule.forFeature([{ name: RecognizedObject.name, schema: RecognizedObjectSchema }])],
  controllers: [MqttController],
  providers: [MqttService],

})
export class MqttModule {}
