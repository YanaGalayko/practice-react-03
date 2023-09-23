import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchByRegion } from "service/country-service";

export const useFetchCountriesByRegion = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const region = searchParams.get("query");
    if (!region) {
      return;
    }
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  const handleSubmit = (query) => {
    setSearchParams({ query: query });
  };

  return { countries, error, loading, handleSubmit };
};
