import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Country, DetailedCountryInfo } from './country.model'; // Import the interface
import axiosInstance from 'src/axiosInstance';

@Injectable()
export class CountriesService {
  private readonly baseUrl = process.env.NAGER_BASE_URL;
  private readonly countriesNowUrl = process.env.COUNTRIES_NOW_BASE_URL;

  async getAvailableCountries(): Promise<Country[]> {
    try {
      const response = await axios.get(this.baseUrl + '/AvailableCountries');
      const countries = response.data;

      return countries.map((country: any) => ({
        countryCode: country.countryCode,
        countryName: country.name,
      }));
    } catch (error) {
      throw new Error('Error fetching available countries');
    }
  }

  async getDetailedCountryInfo(countryCode: string): Promise<DetailedCountryInfo | null> {
    try {
      const getCountryISO3 = require("country-iso-2-to-3");
      countryCode = countryCode.toLowerCase();

      const response = await axiosInstance.get(`${this.baseUrl}/CountryInfo/${countryCode}`);

      const country = response.data;

      const flagResponse = await axiosInstance.post(`${this.countriesNowUrl}/flag/images`, { "iso2": countryCode });

      const populationResponse = await axiosInstance.post(`${this.countriesNowUrl}/population`, { "iso3": getCountryISO3(countryCode.toUpperCase()) });

      let populationCounts = [];
      if (populationResponse.status === 200 && !populationResponse.data.error) {
        populationCounts = populationResponse.data.data.populationCounts.map((values: any) => ({
          year: values.year,
          value: values.value,
        }));
      }

      let flagUrl = "";
      if (flagResponse.status === 200) {
        flagUrl = flagResponse.data.data.flag;
      }

      const borders = country.borders.map((borderCountry: any) => ({
        countryCode: borderCountry.countryCode,
        countryName: borderCountry.commonName,
      }));

      const detailedCountryInfo: DetailedCountryInfo = {
        countryCode: country.countryCode,
        countryName: country.commonName,
        countryOfficialName: country.officialName,
        region: country.region,
        borders: borders,
        countryFlag: flagUrl,
        populationCounts: populationCounts,
      };

      return detailedCountryInfo;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 404) {
          console.log('Country not found in API.');
          return null;
        } else {
          console.error('An Axios error occurred:', error.message);
        }
      } else {
        console.error('An error occurred:', error);
      }
    }
  }
}
export { Country };

