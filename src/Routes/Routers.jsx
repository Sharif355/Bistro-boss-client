import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderShop from "../Pages/OrderShop/OrderShop";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menus",
        element: <Menu></Menu>,
      },
      {
        path: "shop/:category",
        element: <OrderShop></OrderShop>,
      },
    ],
  },
]);

export default routers;
