import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchCountry } from 'hooks';
import { Navigate } from 'react-router-dom';
import { routes } from 'routes';

export const Country = () => {
  const { country, loading, error } = useFetchCountry()

  return (
    <Section>
      <Container>
        {error && <Navigate to={ routes.HOME }/>}
        {loading && <Loader />}
        {country && <CountryInfo country={ country } />}
      </Container>
    </Section>
  );
};
