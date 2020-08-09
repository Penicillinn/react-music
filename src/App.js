import React from "react";
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "@router";
import store from '@store'

import Header from '@components/app-header';
import Footer from '@components/app-footer';

function App() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Header />
          {renderRoutes(routes)}
          <Footer />
        </HashRouter>
      </Provider>
    );
}

export default App;
