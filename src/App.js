import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { publicRoutes } from "./routes/publicRoutes";
import PlaceOrder from "./Pages/PlaceOrder";
import PrivateRouter from "./Pages/authentication/PrivateRouter";

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Header />
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        <Route
          path="/order"
          element={
            <PrivateRouter>
              <PlaceOrder />
            </PrivateRouter>
          }
        ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
