import styled from 'styled-components';
import fonts from '~/utils/fonts';

export const H1 = styled.h1`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-weight: ${fonts.bold};
  font-size: 30px;
  text-align: ${({ align }) => align || 'left'};
  margin: ${({ margin }) => margin || '0'};
  width: 100%;
`;
