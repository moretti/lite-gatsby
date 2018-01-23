import React from 'react';
import { hydrate, render } from 'react-dom';

import './index.css';
import Router from './Router';

import registerServiceWorker from './registerServiceWorker';
import { loadComponents } from 'loadable-components';
import { getState } from 'loadable-components/snap';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  window.snapSaveState = () => getState();
  loadComponents().then(() => {
    hydrate(<Router />, rootElement);
  });
  registerServiceWorker();
} else {
  render(<Router />, rootElement);
}
