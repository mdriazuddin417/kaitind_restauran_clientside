import Home from "../Pages/Home/Home";

import PlaceOrder from "../Pages/PlaceOrder";
import ProductDetails from "../Pages/ProductDetails";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },

  {
    path: "/product/:id",
    name: "ProductDetails",
    Component: ProductDetails,
  },
  {
    path: "/order",
    name: "PlaceOrder",
    Component: PlaceOrder,
  },
];
