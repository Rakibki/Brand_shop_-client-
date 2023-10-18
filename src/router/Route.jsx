import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import AddProduct from "../pages/addProduct/AddProduct";
import MyCard from "../pages/myCard/MyCard";


  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <MainLayout />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/addProduct",
          element: <AddProduct />
        },
        {
          path: "/myCard",
          element: <MyCard />
        }
      ]
    },
  ]);


  export default router