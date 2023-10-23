import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../layout';
import MainPage from '../pages/main-page';
import Login from '../pages/login-page';
import Favorites from '../pages/favorites-page';
import Offer from '../pages/offer-page';
import Page404 from '../pages/page-404';

import { AuthorizationStatus } from '../../const/const';
import PrivateRoute from '../private-route';


type AppProps = {
  countOffers: number;
}

function App({ countOffers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<MainPage countOffers={countOffers} />} />
        <Route path='login' element={<Login />} />
        <Route path='favorites' element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path='offer/:id' element={<Offer />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
