import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { createHashHistory } from 'history';
import Root from './containers/Root';

import './app.global.css';

const history = createHashHistory();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () =>
  render(
    <AppContainer>
      <Root history={history} />
    </AppContainer>,
    document.getElementById('root')
  )
);
