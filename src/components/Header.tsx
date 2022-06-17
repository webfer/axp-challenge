import React from 'react';
import { HeaderStyled, Title, Container, ContentTitle } from '../styles/Header';
import { HeaderProps } from '../interfaces/interface';

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
