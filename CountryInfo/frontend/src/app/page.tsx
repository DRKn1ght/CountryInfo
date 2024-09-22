import { fetchAvailableCountries } from './api/countryApi';
import CountryList from '@/components/CountryList'; // Import client component

export default async function Home() {
  const countries = await fetchAvailableCountries(); // Fetch countries server-side

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Country List</h1>
      <CountryList countries={countries} />
    </div>
  );
}
