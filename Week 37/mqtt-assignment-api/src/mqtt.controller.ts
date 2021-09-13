import { Controller, Inject } from '@nestjs/common';
import { ClientMqtt, Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';

@Controller()
export class MqttController {
  constructor(@Inject('MQTT_START') private client: ClientMqtt) { }

  public async onModuleInit(): Promise<void> {
    await this.client
      .connect()
      .then(() => {
        console.log('connected');
      })
      .catch((e) => console.log('e', e));
  }

  @MessagePattern('#')
  getForwardBackward(@Payload() data: any, @Ctx() context: MqttContext) {
    console.log(`Topic: ${context.getTopic()}`);
  }
}
