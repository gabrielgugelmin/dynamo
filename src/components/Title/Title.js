import styled from 'styled-components';
import colors from '~/utils/colors';
import fonts from '~/utils/fonts';

const title = {
  display: 'block',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: fonts.bold,
  fontSize: '30px',
  textAlign: ({ align }) => align || 'left',
  margin: ({ margin }) => margin || '0',
  width: '100%',
};

export const H1 = styled.h1`
  ${title};
`;

export const H2 = styled.h2`
  ${title};
  font-size: 26px;
`;

export const Subtitle = styled.p`
  color: ${colors.dorado};
  display: block;
  font-size: 16px;
  line-height: 2;
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ align }) => align || 'left'};
  width: 100%;
`;
