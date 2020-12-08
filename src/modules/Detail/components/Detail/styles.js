import styled from 'styled-components';
import { Subtitle as SubtitleComponent } from '~/components/Title/Title';

export const Subtitle = styled(SubtitleComponent)`
  margin: 0 auto;
  max-width: 240px;
`;

export const Text = styled(SubtitleComponent)`
  margin: 0 auto;
  max-width: 400px;
  text-align: center;
`;

export const RocketInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 500px;
  margin: 0 auto;
`;
