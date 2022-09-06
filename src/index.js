import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@aws-amplify/ui-react/styles.css';

import Amplify from 'aws-amplify';
import config from './aws-exports';
import { AmplifyProvider } from '@aws-amplify/ui-react';

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //this will provide styling for the app
  <AmplifyProvider>
    <App />
  </AmplifyProvider>
);
