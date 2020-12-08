import styled, { css } from 'styled-components';
import colors from '~/utils/colors';
import fonts from '~/utils/fonts';

export const Image = styled.div`
  align-items: center;
  justify-content: center;
  padding: 0 24px 0 8px;

  img {
    display: block;
    max-width: 84px;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Info = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardWrapper = styled.div`
  background-color: ${colors.concrete};
  box-shadow: 2px 2px 16px 5px rgba(0, 0, 0, 0);
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  margin-right: 24px;
  padding: 16px;
  transition: box-shadow 0.3s ease-in-out;

  ${css`
    width: calc(33.333% - 16px);
  `}

  &:nth-child(3n) {
    margin-right: 0;
  }

  ${Image} {
    display: ${({ viewMode }) => (viewMode === 'grid' ? 'flex' : 'none')};
  }

  ${Content} {
    flex-direction: ${({ viewMode }) =>
    viewMode === 'grid' ? 'column' : 'row'};
    width: 100%;
  }

  ${Info} {
    flex: 1 1 auto;
    padding-right: ${({ viewMode }) => (viewMode === 'grid' ? '0' : '16px')};
  }

  &:hover {
    box-shadow: 2px 2px 16px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Title = styled.h4`
  color: ${colors.congressBlue};
  font-weight: ${fonts.medium};
  margin-bottom: 4px;
`;

export const Text = styled.p`
  color: ${colors.dorado};
  font-size: 16px;
  font-weight: ${fonts.regular};
`;
