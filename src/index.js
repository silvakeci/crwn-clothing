import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import {CategoriesProvider} from "./contexts/categoriesContext";
import {Provider} from "react-redux";
import reportWebVitals from "./reportWebVitals";
import {store} from "./store/store";
import { CartProvider } from "./contexts/cartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
                  <CategoriesProvider>
                      <CartProvider>
                          <App />
                      </CartProvider>
                  </CategoriesProvider>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
