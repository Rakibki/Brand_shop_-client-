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
import PrivateRoute from "../router/PrivateRoute"
import BrandCollection from "../components/brandCollection/BrandCollection";
import ProductDetails from "../components/productDetails/ProductDetails";

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
          element: <PrivateRoute> <AddProduct /> </PrivateRoute>
        },
        {
          path: "/myCard",
          element: <MyCard />
        },
        {
          path: "/brand/:name",
          element: <BrandCollection />,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.name}`)
        },
        {
          path: "/product/:productId",
          element: <ProductDetails />,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.productId}`) 
        }
      ]
    },
  ]);


  export default router