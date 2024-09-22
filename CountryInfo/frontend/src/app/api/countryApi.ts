import { Country, DetailedCountryInfo } from '@/models/country.model';

export async function fetchAvailableCountries(): Promise<Country[]> {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/api/countries/GetAvailableCountries`);
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    const countries: Country[] = await response.json();
    return countries;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchDetailedCountryInfo(countryCode: string): Promise<DetailedCountryInfo | undefined> {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/api/countries/GetDetailedCountryInfo/` + countryCode)
    if (!response.ok) {
      throw new Error('Failed to fetch detailed country information');
    }
    const detailedCountryInfo = await response.json();
    return detailedCountryInfo
  } catch (error) {
    console.error(error);
    return undefined;
  }
}