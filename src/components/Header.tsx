import { HeaderStyled, Title, Container, ContentTitle } from '../styles/Header';

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <ContentTitle>
          <Title> Google Search Autocomplete</Title>
        </ContentTitle>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
