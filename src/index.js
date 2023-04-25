import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { UserProvider } from "./contexts/user.context";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";

import "./index.scss";
// import { ProductsProvider } from "./contexts/product.context";
// import { CartProvider } from "./contexts/cart.context";
// import { CategoriesProvider } from "./contexts/categories.context";
import { persistor, store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
          {/* <CartProvider> */}
          <App />
          {/* </CartProvider> */}
          {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
