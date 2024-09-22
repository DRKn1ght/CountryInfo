export interface Country {
    countryCode: string;
    countryName: string;
    countryFlag: string;
}

export interface PopulationCount {
    year: number;
    value: number;
}

export interface DetailedCountryInfo {
    countryCode: string;
    countryName: string;
    countryOfficialName:string
    countryFlag: string;
    region: string;
    borders: Country[];
    populationCounts: PopulationCount[];
}