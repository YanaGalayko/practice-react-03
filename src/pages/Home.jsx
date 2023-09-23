import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks';

export const Home = () => {
  const {countries, error, loading} = useFetchCountries()

  return (
    <Section>
      <Container>
        {error && <Heading textAlign='center'>Something went wront</Heading>}
        {loading && <Loader/>}
        {countries.length > 0 && <CountryList countries={countries}/>}
      </Container>
    </Section>
  );
};
