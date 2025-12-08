import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import PetsSupplies from "../Pages/PetsSupplies/PetsSupplies";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddListing from "../Pages/AddListing/AddListing";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import MyListings from "../Pages/MyListings/MyListings";
import UpdateListing from "../Pages/UpdateListing/UpdateListing";
import PrivateRoute from "../components/PrivateRoute";
import Pets from "../components/Pets";
import FoodData from "../components/FoodData";
import CareProducts from "../components/CareProducts";
import Accessories from "../components/Accessories";
import MyOrders from "../Pages/MyOrders";


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
        path: '/addListing',
        element: <PrivateRoute><AddListing></AddListing></PrivateRoute>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      }
    ]
  },
  {
    path: '/service-details/:id',
    element: <PrivateRoute>
      <ServiceDetails></ServiceDetails>
    </PrivateRoute>
  },
  {
    path: '/myListings',
    element: <PrivateRoute><MyListings></MyListings></PrivateRoute>
  },
  {
    path: '/updateListing/:id',
    element: <PrivateRoute><UpdateListing></UpdateListing></PrivateRoute>
  },
  {
    path: '/category/Pets',
    element:<Pets></Pets>
  },
  {
    path: '/category/food',
    element:<FoodData></FoodData>
  },
  {
    path: '/category/care-product',
    element:<CareProducts></CareProducts>
  },
  {
    path: '/category/accessories',
    element:<Accessories></Accessories>
  },
  {
    path: '/myorders',
    element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
  }

])