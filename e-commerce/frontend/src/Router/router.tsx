import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Root";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/LoginPage";
import Category from "../components/common/Category";
import Dashboard from "../dashboard/Dashboard/DashBoard";
import AdminLogin from "../dashboard/AdminLogin/AdminLogin";
import Products from "../dashboard/Products/Products";
import AddProducts from "../dashboard/Products/AddProducts";
import DashboardRoot from "../dashboard/DashboardRoot";
import ErrorPage from "../components/common/ErrorPage";
import ShowProduct from "../components/common/ShowProduct";
import Cart from "../components/Cart/Cart";
import Addresses from "../components/address/Addresses";
import UserAccount from "../components/UserAccount/UserAccount";
import Auth from "../components/auth/Auth";
import AdminOrders from "../dashboard/Orders/AdminOrders";
import ShowOrder from "../dashboard/Orders/ShowOrder";
import Payment from "../components/payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products/:category",
        element: <Category />,
      },
      {
        path: "/products/:category/:subCategory",
        element: <Category />,
      },
      {
        path: "/products/:category/:subCategory/:type",
        element: <Category />,
      },
      {
        path: "/products/search/:search",
        element: <Category />,
      },
      {
        path: "/show-product/:uid",
        element: <ShowProduct />,
      },
      {
        path: "checkout/cart",
        element: <Cart />,
      },
      {
        path: "/checkout/cart/address",
        element: (
          <Auth>
            <Addresses />
          </Auth>
        ),
      },
      {
        path: "/checkout/cart/payment",
        element: (
          <Auth>
            <Payment />
          </Auth>
        ),
      },
      {
        path: "/my/:id",
        element: (
          <Auth>
            <UserAccount />
          </Auth>
        ),
      },
      {
        path: "/my/:id/:child",
        element: (
          <Auth>
            <UserAccount />
          </Auth>
        ),
      },
    ],
  },
  {
    path: "/dashboard/",
    element: <DashboardRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "add-products",
        element: <AddProducts />,
      },
      {
        path: "update-product/:uid",
        element: <AddProducts />,
      },
      {
        path: "orders",
        element: <AdminOrders />,
      },
      {
        path: "orders/order/:uid",
        element: <ShowOrder />,
      },
    ],
  },
  {
    path: "/dashboard/login",
    element: <AdminLogin />,
  },
]);
