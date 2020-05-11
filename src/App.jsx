import React from 'react';
import Header from './vue/Header';
import FirstPage from './vue/FirstPage';
import Homes from './vue/Homes';
import About from './vue/About';
import Advantage from './vue/Advantage';
import Order from './vue/Order';
import Reason from './vue/Reason';
import Questions from './vue/Questions';
import Map from './vue/Map';
import scrollToElement from 'scroll-to-element';
//Привет, я Аня

const App = () => {
  const [form, setFrom] = React.useState({ phone: '', email: '', comment: '' });
  const orderRef = React.useRef(null);
  const homeRef = React.useRef(null);
  const makeOrder = (newForm) => {
    setFrom({ ...form, ...newForm });
    if (orderRef.current) {
      scrollToElement(orderRef.current);
    }
  };
  return (
    <>
      <Header />
      <FirstPage homeRef={homeRef} makeOrder={makeOrder} />
      <Homes ref={homeRef} makeOrder={makeOrder} />
      <About />
      <Advantage />
      <Reason />
      <Questions />
      <Order ref={orderRef} form={form} />
      <Map />
    </>
  );
};

export default App;
