import styled from 'styled-components';
import colors from '~/utils/colors';

export const List = styled.ul`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
`;

export const Feedback = styled.p``;

export const Text = styled.p`
  font-size: 12px;
  margin-right: 16px;
`;

export const ViewMode = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  margin-bottom: 24px;
`;

export const ViewModeButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;

  &:last-child {
    margin-left: 8px;
  }

  &.active {
    svg {
      fill: ${colors.blazeOrange};
    }
  }

  svg {
    display: block;
    height: 24px;
  }
`;
