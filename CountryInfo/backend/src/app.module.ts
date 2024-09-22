import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CountriesController } from './countries/countries.controller';
import { CountriesService } from './countries/countries.service.ts';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      isGlobal: true,
    }),
  ],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class AppModule {}
