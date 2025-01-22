import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import ShopPage from "./page/ShopPage/ShopPage.jsx";
import AuthenticationContainer from "./page/AuthenticationContainer/AuthenticationContainer.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from "./page/checkout/checkout.jsx";
//import SHOP_DATA from './page/ShopPage/ShopData.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
        // children: SHOP_DATA.map(collections => (
        //   {path: collections.routeName,
        //    element: <div>{collections.title}</div>
        //   }
        // ))
      },
      {
        path: "/auth",
        element: <AuthenticationContainer />,
      },
      {
        path: "/checkout",
        element: <Checkout/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App/> */}
    <Provider store={store}>
      <PayPalScriptProvider
        options={{
          clientId:
            "ARIwNtThSRFZ5Ll7brTcsJKRB7qEB11AawfAfrlrEo-PowoqyK5q4pLaX1J7DpvmMp04c5lCOc8EH4LL",
        }}
      >
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </StrictMode>
);
