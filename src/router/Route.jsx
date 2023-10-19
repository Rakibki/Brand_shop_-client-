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
import ProductUpdate from "../components/productUpdate/ProductUpdate";

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
          element: <PrivateRoute> <MyCard /> </PrivateRoute>,
          loader: () => fetch('http://localhost:5000/myProducts')
        },
        {
          path: "/brand/:name",
          element: <BrandCollection />,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.name}`)
        },
        {
          path: "/product/:productId",
          element: <PrivateRoute> <ProductDetails /> </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.productId}`) 
        },
        {
          path: "/products/:id",
          element: <PrivateRoute> <ProductUpdate /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        }
      ]
    },
  ]);


  export default router