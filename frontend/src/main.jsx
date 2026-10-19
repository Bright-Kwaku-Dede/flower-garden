import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FlowerDetails from "./pages/FlowerDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/flower/:id" element={<FlowerDetails />} />
    </Routes>
  </BrowserRouter>
);

