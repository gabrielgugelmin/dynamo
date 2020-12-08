import styled from 'styled-components';
import colors from '~/utils/colors';
import Loading from '~/assets/icons/loading';

export const ButtonComponent = styled.button`
  background-color: ${colors.congressBlue};
  border-radius: 4px;
  border: 0;
  color: ${colors.white};
  cursor: pointer;
  font-size: 18px;
  height: 64px;
  width: 100%;
  box-shadow: 4px 4px 16px 2px rgba(42, 35, 31, 0.24);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 0 rgba(42, 35, 31, 0);
  }
`;

export const LoadingIcon = styled(Loading)`
  width: 24px;
  height: 24px;
`;
