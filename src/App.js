import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import stores from './stores';
import GlobalStyles from '~/styles/global';

function App() {
  return (
    <Provider {...stores}>
      <>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
      </>
    </Provider>
  );
}

export default App;
