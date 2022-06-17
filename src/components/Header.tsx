import { HeaderStyled, Title, Container, ContentTitle } from '../styles/Header';
import { HeaderProps } from '../interfaces/interface';
import React from 'react';

// Header component, the Title is and parameter required
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderStyled>
      <Container>
        <ContentTitle>
          {<Title data-testid='header__id'>{title}</Title> }
        </ContentTitle>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
