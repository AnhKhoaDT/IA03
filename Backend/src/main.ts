import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  // CORS: be permissive in development to avoid preflight issues; restrict via env in production
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    app.enableCors({
      origin: true, // reflect request origin
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type, Authorization',
    });
  } else {
    const envOrigins = (process.env.CORS_ORIGIN || '')
      .split(',')
      .map((o) => o.trim())
      .filter(Boolean);
    app.enableCors({
      origin: envOrigins,
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type, Authorization',
    });
  }

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidUnknownValues: false,
    })
  );

  const port = process.env.PORT ? Number(process.env.PORT) : 3000;
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`Backend listening on http://localhost:${port}`);
}

bootstrap();
