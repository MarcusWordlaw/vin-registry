import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import configureStore from 'store';
import 'fontsource-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#424242',
      dark: '#000',
    },
    secondary: {
      main: '#fafafa',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
