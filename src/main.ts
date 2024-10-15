import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser'

async function bootstrap() {
  const port = process.env.PORT
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser())

  await app.listen(port, () => {
    console.log(
      `App is runing on: http://localhost:${port}`
    );
  });
}
bootstrap();


