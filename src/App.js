import './App.scss';
// import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from './pages/Contact';



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<p>home</p>} />
          <Route path="about-me" element={<p>about me</p>} />
          <Route path="skills" element={<p>skills</p>} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
        <TawkMessengerReact
          propertyId={process.env.REACT_APP_PROPERTY_ID}
          widgetId={process.env.REACT_APP_WIDGET_ID} />
      </BrowserRouter>
    </>
  );
}

export default App;
