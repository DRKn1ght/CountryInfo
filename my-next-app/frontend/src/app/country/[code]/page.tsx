"use client";

import { useParams } from 'next/navigation';
import React from 'react';
import { Country, DetailedCountryInfo, PopulationCount } from '@/models/country.model';
import Image from 'next/image'
import {Component} from '@/components/chart'

export const borders: Country[] = [
    { countryCode: "FR", countryFlag: "https://flagcdn.com/fr.svg", countryName: "France" },
    { countryCode: "ES", countryFlag: "https://flagcdn.com/es.svg", countryName: "Spain" }
];

export const populationCount: PopulationCount[] = [
    { year: 1960, value: 29637450 },
    { year: 1961, value: 29964000 },
    { year: 1962, value: 30308500 },
    { year: 1963, value: 30712000 }
];

export const country: DetailedCountryInfo = {
    countryCode: "AD",
    countryName: "Andorra", 
    countryFlag: "https://flagcdn.com/ad.svg",
    countryOfficialName: "Principality of Andorra",
    region: "Europe",
    borders: borders,
    populationCounts: populationCount
};

export const findByCode = (countryCode: string): DetailedCountryInfo | undefined => {
    if (countryCode.toLocaleLowerCase() == country.countryCode.toLowerCase())
        return country
    return undefined
};

export default function CountryDetail() {
  // Get the dynamic "code" from the URL
  const { code } = useParams();
  
  const country = findByCode(code.toString());

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Country Info - {country?.countryName}</h1>
      {country ?  (
        <div>
            <h2 className="text-2xl font-bold">{country.countryName}</h2>
            <Image priority src={country.countryFlag} alt={country.countryName} width={200} height={200}></Image>
            <h4 className="text-1xl font-bold">{country.countryName} is located in {country.region} and has {country.borders.length} countries on its borders.</h4>
            <Component populationCounts={country.populationCounts}></Component>
        </div>

      ) : (
        <h2 className="text-2xl font-bold">Country not found.</h2>
      )
    }
    </div>
  );
}
