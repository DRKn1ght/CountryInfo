"use client";
import React, { useState } from 'react';
import { Country } from '@/models/country.model';

interface CountryListProps {
    countries: Country[];
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCountries = countries.filter((country) =>
        country.countryName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groupedCountries = alphabet.map((letter) => ({
        letter,
        countries: filteredCountries.filter((country) => country.countryName.startsWith(letter)),
    }));

    const midpoint = Math.ceil(groupedCountries.length / 2);
    const leftColumn = groupedCountries.slice(0, midpoint);
    const rightColumn = groupedCountries.slice(midpoint);

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-400 mb-4 p-2 border border-gray-300 rounded-md"
            />
            <div className="flex pl-15">
                <div className="w-1/2">
                    {leftColumn.map((group) => (
                        <div key={group.letter}>
                            <h2 className="text-2xl font-bold">{group.letter}</h2>
                            {group.countries.length > 0 ? (
                                group.countries.map((country) => (
                                    <div key={country.countryCode} className="ml-4 underline">
                                        <a href={'/country/' + country.countryCode}>{country.countryName}</a>
                                    </div>
                                ))
                            ) : (
                                <div className="ml-4 text-gray-500">No countries</div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="w-1/2">
                    {rightColumn.map((group) => (
                        <div key={group.letter}>
                            <h2 className="text-2xl font-bold">{group.letter}</h2>
                            {group.countries.length > 0 ? (
                                group.countries.map((country) => (
                                    <div key={country.countryCode} className="ml-4 underline">
                                        <a href={'/country/' + country.countryCode}>{country.countryName}</a>
                                    </div>
                                ))
                            ) : (
                                <div className="ml-4 text-gray-500">No countries</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CountryList;
