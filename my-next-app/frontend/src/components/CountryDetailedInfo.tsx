"use client";
import React from 'react';
import Image from 'next/image';
import { Component } from '@/components/Chart';
import { DetailedCountryInfo } from '@/models/country.model';
import CountryList from './CountryList';


interface CountryDetailProps {
    detailedCountry: DetailedCountryInfo | undefined;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ detailedCountry }) => {
    return (
        <div className="flex flex-col items-center p-4">
            {detailedCountry ? (
                <div>
                    <h2 className="text-2xl font-bold text-center">{detailedCountry.countryName}</h2>
                    {detailedCountry.countryFlag == "" ? (
                        <h4 className="text-1xl font-bold">Flag not found from countriesnow.space</h4>
                    ) : (
                        <Image
                            priority
                            src={detailedCountry.countryFlag}
                            alt={detailedCountry.countryName}
                            width={200}
                            height={200}
                            className='mx-auto block'
                        />
                    )
                    }
                    <h4 className="text-1xl font-bold pt-3">
                        {detailedCountry.countryName} is located in {detailedCountry.region} and has {detailedCountry.borders.length} countries on its borders.
                    </h4>
                    {detailedCountry.populationCounts.length > 0 ? (
                        <div className="mt-4 w-full max-w-md mx-auto">
                            <h4 className="text-1xl font-bold text-left">Country population chart:</h4>
                            <div className="w-full max-w-xl mx-auto">
                                <Component populationCounts={detailedCountry.populationCounts} />
                            </div>
                        </div>
                    ) : (
                        <h4 className="text-1xl font-bold">{detailedCountry.countryName} doesn't have population data.</h4>
                    )}
                    <div className="border-t border-gray-300 my-4" />
                    <h4 className="text-1xl font-bold text-left pb-3">Border countries:</h4>
                    <div className='pl-20'>
                        <CountryList countries={detailedCountry.borders}></CountryList>
                    </div>
                </div>
            ) : (
                <h2 className="text-2xl font-bold">Country not found.</h2>
            )}
        </div>
    );
};

export default CountryDetail;
