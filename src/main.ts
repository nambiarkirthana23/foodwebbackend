import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as cors from 'cors'; // Import as 'cors'

async function bootstrap() {
  dotenv.config(); 
  const app = await NestFactory.create(AppModule);
  
  // Use the cors middleware with options
  app.use(cors({
    origin: process.env.FRONTEND_URL || ' http://localhost:3001', // Use environment variable or fallback URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the methods you want to allow
    credentials: true,
  }));

  await app.listen(3005);//data 
}
bootstrap();
