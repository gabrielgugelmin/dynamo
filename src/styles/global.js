import { createGlobalStyle } from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Planet from '~/assets/images/planet.svg';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  html, body, #root {
    min-height: 100%;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;

    @media (min-width: 1600px) {
      background: no-repeat url(${Planet});
      background-position: 108% -10%;
    }
  }
`;
