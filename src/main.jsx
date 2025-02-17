import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "flowbite/dist/flowbite.min.js";
import TokenContextProvider from "./context/tokenContext.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.js";
import CartContextProvider from "./context/CartContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TokenContextProvider>
      <Provider store={store}>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </Provider>
    </TokenContextProvider>
  </StrictMode>
);
