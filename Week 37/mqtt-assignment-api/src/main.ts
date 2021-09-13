import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.MQTT,
    options: {
      url: 'mqtts://a8abef4e9bd641b69b6ea2c4de9f512f.s1.eu.hivemq.cloud',
      port: 8883,
      username: 'admin',
      password: 'SKELLYskelly69!'
    },
  });
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
