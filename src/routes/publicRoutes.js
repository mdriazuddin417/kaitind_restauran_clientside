import Login from "../Pages/authentication/Login";
import SignUp from "../Pages/authentication/SignUp";
import Home from "../Pages/Home/Home";

import ProductDetails from "../Pages/ProductDetails";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/login", name: "Login", Component: Login },
  { path: "/signup", name: "SignUp", Component: SignUp },

  {
    path: "/product/:id",
    name: "ProductDetails",
    Component: ProductDetails,
  },
];
