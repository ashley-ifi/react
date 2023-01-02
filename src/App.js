import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes';
import GlobalStyle from './styles/global'
import Header from './components/header';
import { CartContextPovider } from './context/cart';


function App() {
  return (
  <CartContextPovider>
  <BrowserRouter>
  <Header />
   <Routing />
  </BrowserRouter>
   <GlobalStyle/>
  </CartContextPovider>

  );
  
  }

export default App;
