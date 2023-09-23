import { Section, Container, CountryInfo, Loader, GoBackBtn } from "components";
import { useFetchCountry } from "hooks";
import { Navigate, useLocation } from "react-router-dom";
import { routes } from "routes";

export const Country = () => {
  const { country, loading, error } = useFetchCountry();
  const location = useLocation();
  const goBackLink = location?.state?.from ?? routes.HOME;

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink}>Back to countries</GoBackBtn>
        {error && <Navigate to={routes.HOME} />}
        {loading && <Loader />}
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};
