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
import SnackbarConst from "./components/SnackbarConst";
import Lumbers from "./vue/Lumbers";

const App = () => {
  const [form, setFrom] = React.useState({ phone: '', email: '', comment: '' });
  const orderRef = React.useRef(null);
  const homeRef = React.useRef(null);
  const [stateSnackbar, setStateSnackbar] = React.useState(null);
  const makeOrder = (newForm) => {
    setFrom({ ...form, ...newForm });
    setStateSnackbar({
        text: "Пожалуйста, заполните поле заказа. Описание заказа было сформировано автоматически",
        severity: "info"});
    if (orderRef.current) {
      scrollToElement(orderRef.current);
    }
  };

    const handleClose = (props) =>{
        setStateSnackbar(null);
    };

  return (
    <>
      <Header />
      <FirstPage homeRef={homeRef} makeOrder={makeOrder} />
      <Homes ref={homeRef} makeOrder={makeOrder} />
      <Lumbers makeOrder={makeOrder} />
      <About />
      <Advantage />
      <Reason />
      <Questions />
      <Order ref={orderRef} form={form} />
      <Map />
        {stateSnackbar && <SnackbarConst
          onClose={handleClose}
          open={Boolean(stateSnackbar)}
          text={stateSnackbar.text}
          severity={stateSnackbar.severity}
      />}
    </>
  );
};

export default App;
