import Card from "../Pages/Card";
import Home from "../Pages/Home/Home";
import Paypal from "../Pages/Paypal";
import PlaceOrder from "../Pages/PlaceOrder";
import ProductDetails from "../Pages/ProductDetails";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/checkout/paypal", name: "Paypal", Component: Paypal },
  { path: "/checkout/card", name: "Card", Component: Card },

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
