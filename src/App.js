import './App.scss';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppRoutes } from './components/AppRoutes';
// import { useEffect } from 'react';

function App() {

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
      <TawkMessengerReact
        propertyId={process.env.REACT_APP_PROPERTY_ID}
        widgetId={process.env.REACT_APP_WIDGET_ID} />
    </>
  );
}

export default App;
