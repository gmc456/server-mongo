import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RecognizedObject, RecognizedObjectDocument } from './schemas/recognizedObjects.schema';
import { Model } from 'mongoose';
import { CreateRecognizedObjectDto } from './dto/create-recognizedObjects.dto';


@Injectable()
export class MqttService {
  constructor(
    @InjectModel(RecognizedObject.name) private readonly recognizedObjectModel: Model<RecognizedObjectDocument>,
  ) {}

  async create(createRecognizedObjectDto: CreateRecognizedObjectDto): Promise<RecognizedObject> {
    return this.recognizedObjectModel.create(createRecognizedObjectDto);
  }
}
