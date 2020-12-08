import styled from 'styled-components';
import colors from '~/utils/colors';
import fonts from '~/utils/fonts';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 0 16px;
  text-align: center;
  width: 33.33%;
`;

export const Title = styled.h4`
  color: ${colors.congressBlue};
  font-size: 14px;
  font-weight: ${fonts.medium};
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: ${fonts.regular};
`;
