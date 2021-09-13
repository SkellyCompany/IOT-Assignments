import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
  });
  app.connectMicroservice({
    transport: Transport.MQTT,
    options: {
      host: 'mqtts://a8abef4e9bd641b69b6ea2c4de9f512f.s1.eu.hivemq.cloud:8883',
      username: 'skelly',
      password: 'SKELLYskelly11!'
    },
  });
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();