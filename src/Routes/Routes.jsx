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
        element:<AddListing></AddListing>
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
    element:<ServiceDetails></ServiceDetails>
  },
  {
    path: '/myListings',
    element:<MyListings></MyListings>
  },
  {
    path: '/updateListing/:id',
    element:<UpdateListing></UpdateListing>
  }
  

])