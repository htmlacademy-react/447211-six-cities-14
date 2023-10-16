import MainPage from '../MainPage';

type AppProps = {
  countOffers: number;
}

function App({countOffers}: AppProps): JSX.Element {
  return (
    <MainPage />
  );
}

export default App;
