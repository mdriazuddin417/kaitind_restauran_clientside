import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";

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
    </div>
  );
}

export default App;
