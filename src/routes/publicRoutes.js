import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  {
    path: "/product/:id",
    name: "ProductDetails",
    Component: ProductDetails,
  },
];
