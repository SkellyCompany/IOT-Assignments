import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttController } from './mqtt.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MQTT_START',
        transport: Transport.MQTT,
        options: {
          url: 'mqtts://a8abef4e9bd641b69b6ea2c4de9f512f.s1.eu.hivemq.cloud',
          port: 8883,
          username: 'admin',
          password: 'SKELLYskelly69!'
        },
      },
    ]),
  ],
  controllers: [AppController, MqttController],
  providers: [AppService],
})
export class AppModule { }
