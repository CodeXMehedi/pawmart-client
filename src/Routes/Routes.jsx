import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import PetsSupplies from "../Pages/PetsSupplies/PetsSupplies";
import Login from "../Pages/Login/Login";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/pets&Supplies',
        element:<PetsSupplies></PetsSupplies>
      },
      {
        path: '/login',
        element:<Login></Login>
      }
    ]
  }

])