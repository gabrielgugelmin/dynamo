import styled from 'styled-components';
import Astronaut from '~/assets/images/astronaut.svg';

export default styled.div`
  height: 100%;

  @media (min-width: 998px) {
    background: no-repeat url(${Astronaut});
    background-position: -300px 180px;
    background-size: 1000px;
  }

  @media (min-width: 1280px) {
    background: no-repeat url(${Astronaut});
    background-position: -420px -140px;
    background-size: 1430px;
  }
`;
