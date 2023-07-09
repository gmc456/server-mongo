import { ObjectDetected } from '../schemas/objectDetected.schema';

export class CreateRecognizedObjectDto {  
  
  readonly id_estacion: string;

  readonly timestamp: Date;

  readonly objectsDetected: ObjectDetected[];
}
