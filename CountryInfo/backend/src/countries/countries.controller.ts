import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService, Country } from './countries.service.ts';
import { DetailedCountryInfo } from './country.model.js';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) { }

  // Define the /GetAvailableCountries route
  @Get('GetAvailableCountries')
  async getAvailableCountries(): Promise<Country[]> {
    return await this.countriesService.getAvailableCountries();
  }

  @Get('GetDetailedCountryInfo/:countryCode')
  async getDetailedCountryInfo(@Param('countryCode') countryCode: string): Promise<DetailedCountryInfo> {
    return await this.countriesService.getDetailedCountryInfo(countryCode);
  }

}