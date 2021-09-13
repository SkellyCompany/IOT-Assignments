import { Controller, Inject } from '@nestjs/common';
import {ClientMqtt, Ctx, MessagePattern, MqttContext, Payload} from '@nestjs/microservices';

@Controller()
export class MqttController {
  constructor(@Inject('MQTT_CLIENT') private client: ClientMqtt) {}

  public async onModuleInit(): Promise<void> {
    await this.client
      .connect()
      .then(() => {
        console.log('connected');
        console.log(
          'resPatt:' +
            this.client.getResponsePattern('player/forward-backward'),
        );
        console.log(
          'reqPatt:' + this.client.getRequestPattern('player/forward-backward'),
        );
        this.client.emit('connectd', JSON.stringify({ a: 'heloooo' }));
      })
      .catch((e) => console.log('e', e));
  }

  @MessagePattern('abc')
  getForwardBackward(@Payload() data: any, @Ctx() context: MqttContext) {
    console.log(`Topic: ${context.getTopic()}`);
  }
}