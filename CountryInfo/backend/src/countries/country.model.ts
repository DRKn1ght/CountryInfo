import { IsNumber, IsString, IsUrl } from 'class-validator';

export class Country {
    @IsString()
    countryCode: string;

    @IsString()
    countryName: string;
}

export class PopulationCount {
    @IsNumber()
    year: number;

    @IsNumber()
    value: number;
}

export class DetailedCountryInfo {
    @IsString()
    countryCode: string;

    @IsString()
    countryName: string;

    @IsString()
    countryOfficialName: string

    @IsString()
    countryFlag: string;

    @IsString()
    region: string;

    borders: Country[];

    populationCounts: PopulationCount[];
}