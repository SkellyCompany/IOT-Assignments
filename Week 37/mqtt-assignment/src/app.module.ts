import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttController } from './mqtt.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MQTT_CLIENT',
        transport: Transport.MQTT,
        options: {
          host: 'mqtts://a8abef4e9bd641b69b6ea2c4de9f512f.s1.eu.hivemq.cloud:8883',
          username: 'skelly',
          password: 'SKELLYskelly11!'
        },
      },
    ]),
  ],
  controllers: [AppController, MqttController],
  providers: [AppService],
})
export class AppModule {}
