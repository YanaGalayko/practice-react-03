import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from "components";
import { useFetchCountriesByRegion } from "hooks";

export const CountrySearch = () => {
  const { countries, error, loading, handleSubmit } =
    useFetchCountriesByRegion();
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        {error && <Heading textAlign="center">Something went wront</Heading>}
        {loading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
