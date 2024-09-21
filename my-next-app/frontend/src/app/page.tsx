"use client";
import React, { useState } from 'react';
import { Country } from '@/models/country.model';

export const countries: Country[] = [
  { countryCode: "AD", countryName: "Andorra", countryFlag: "https://flagcdn.com/ad.svg" },
  { countryCode: "AR", countryName: "Argentina", countryFlag: "https://flagcdn.com/ar.svg" },
  { countryCode: "AU", countryName: "Australia", countryFlag: "https://flagcdn.com/au.svg" },
  { countryCode: "BE", countryName: "Belgium", countryFlag: "https://flagcdn.com/be.svg" },
  { countryCode: "BR", countryName: "Brazil", countryFlag: "https://flagcdn.com/br.svg" },
  { countryCode: "CA", countryName: "Canada", countryFlag: "https://flagcdn.com/ca.svg" },
  { countryCode: "CN", countryName: "China", countryFlag: "https://flagcdn.com/cn.svg" },
  { countryCode: "DE", countryName: "Germany", countryFlag: "https://flagcdn.com/de.svg" },
  { countryCode: "DO", countryName: "Dominican Republic", countryFlag: "https://flagcdn.com/do.svg" },
  { countryCode: "ES", countryName: "Spain", countryFlag: "https://flagcdn.com/es.svg" },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter countries by search term
  const filteredCountries = countries.filter((country) =>
    country.countryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group countries by first letter
  const groupedCountries = alphabet.map((letter) => ({
    letter,
    countries: filteredCountries.filter((country) => country.countryName.startsWith(letter)),
  }));

  // Split into two approximately equal columns
  const midpoint = Math.ceil(groupedCountries.length / 2);
  const leftColumn = groupedCountries.slice(0, midpoint);
  const rightColumn = groupedCountries.slice(midpoint);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Country List</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-400 mb-4 p-2 border border-gray-300 rounded-md"
      />
      <div className="flex">
        <div className="w-1/2">
          {leftColumn.map((group) => (
            <div key={group.letter}>
              <h2 className="text-2xl font-bold">{group.letter}</h2>
              {group.countries.length > 0 ? (
                group.countries.map((country) => (
                  <div key={country.countryCode} className="ml-4">{country.countryName}</div>
                ))
              ) : (
                <div className="ml-4 text-gray-500">No countries</div>
              )}
            </div>
          ))}
        </div>
        <div className="w-1/2">
          {rightColumn.map((group => (
            <div key={group.letter}>
              <h2 className="text-2xl font-bold">{group.letter}</h2>
              {group.countries.length > 0 ? (
                  group.countries.map((country => (
                    <div key={country.countryCode} className="ml-4">{country.countryName}</div>
                  )))
                ) : (
                  <div className="ml-4 text-gray-500">No countries</div>
              )
            }
            </div>
          )))}
        </div>
      </div>
    </div>
  );
}
