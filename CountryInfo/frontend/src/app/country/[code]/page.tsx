import { fetchDetailedCountryInfo } from '@/app/api/countryApi';
import CountryDetail from '@/components/CountryDetailedInfo'; // Client component

interface CountryDetailPageProps {
  params: { code: string };
}

export default async function CountryDetailPage({ params }: CountryDetailPageProps) {
  const countryCode = params.code;
  const detailedCountry = await fetchDetailedCountryInfo(countryCode);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Country Info - {detailedCountry?.countryName}</h1>
      <CountryDetail detailedCountry={detailedCountry} />
    </div>
  );
}
