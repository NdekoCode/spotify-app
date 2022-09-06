import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/custom.css";
import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
