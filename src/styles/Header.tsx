import styled from 'styled-components';
import { media } from '../theme/Media';

export const HeaderStyled = styled.header`
  background: hsl(0, 0%, 90%);
  border-bottom: 1px solid #acacac;
`;

export const ContentTitle = styled.div`
  display: block;
  position: relative;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1em;
  ${media.greaterThan('lg')`
    max-width: 52em;
 `};
`;

export const Title = styled.h1`
  margin: 0;
  padding: 1em 0;
  font-size: 1.5em;
  font-weight: 300;
  text-align: center;
  color: black;

  ${media.greaterThan('md')`
   font-size: 2em;
 `};

  ${media.greaterThan('lg')`
          font-size: 2.5em;

 `};
`;
