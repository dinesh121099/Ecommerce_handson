import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './page/HomePage/HomePage.jsx';
import Header from './components/Header/Header.jsx';
import ShopPage from './page/ShopPage/ShopPage.jsx';
import SignIn from './page/SignIn/SignIn.jsx';
import SHOP_DATA from './page/ShopPage/ShopData.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/shop",
        element: <ShopPage/>,
        children: SHOP_DATA.map(collections => (
          {path: collections.routeName,
           element: <div>{collections.title}</div>
          }
        ))
      },
      {
        path: "/signin",
        element: <SignIn/>
      }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
