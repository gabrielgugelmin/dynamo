import styled from 'styled-components';
import LogoImage from '~/assets/images/logo';
import ManImage from '~/assets/images/man.jpg';

import colors from '~/utils/colors';
import fonts from '~/utils/fonts';

export const Caps = styled.span`
  text-transform: uppercase;
`;

export const HeaderWrapper = styled.header`
  padding: 32px 0;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Photo = styled.div`
  background: no-repeat center url(${ManImage});
  background-size: cover;
  border-radius: 50%;
  height: 32px;
  width: 32px;
`;

export const Greetings = styled.p`
  color: ${colors.congressBlue};
  font-size: 14px;
  font-weight: ${fonts.medium};
  margin-left: 8px;
`;

export const Logo = styled(LogoImage)`
  width: 64px;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;
