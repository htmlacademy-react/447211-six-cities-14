import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type IndexProps = {
  countOffers: number;
}

root.render(
  <React.StrictMode>
    <App countOffers={312} />
  </React.StrictMode>
);
