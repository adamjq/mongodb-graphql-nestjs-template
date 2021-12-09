import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { HealthModule } from './health/health.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.getMongoConfig(),
    }),
    CatsModule,
    HealthModule,
  ],
})
export class AppModule {}
