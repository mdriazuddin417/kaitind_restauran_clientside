import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
