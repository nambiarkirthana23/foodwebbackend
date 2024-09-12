import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AuthModule } from './auth/auth.module';
import { typeOrmconfigAsync } from './typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { RegisterUserFoodOrdering } from './users/UserFoodWeb';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make ConfigModule available to all modules
    }),
    // AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'kirthana',
      database: 'food_ordering',
      entities: [ RegisterUserFoodOrdering],
      autoLoadEntities: true,
      synchronize: true,
    }),
    // TypeOrmModule.forRootAsync(typeOrmconfigAsync)
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'FRONTEND_URL',
      useValue: 'http://localhost:3001/createAccount', // Hardcode the Frontend URL here
    },
  ],
})
export class AppModule {}
