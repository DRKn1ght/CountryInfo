import { IsString, IsUrl } from 'class-validator';

export class CountryDto {
    @IsString()
    countryCode: string;

    @IsString()
    countryName: string;

    @IsUrl()
    countryFlag: string;
}