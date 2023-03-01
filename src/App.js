import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import AppFooter from "./Components/AppFooter";
import Store from "./Pages/Store";
import ItemPage from "./Pages/ItemPage";
import CategoryPage from "./Pages/CategoryPage";
import PaymentPage from "./Pages/PaymentPage";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <Navbar response={response} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route
            path="/Payment/:id"
            element={
              <PaymentPage response={response} setResponse={setResponse} />
            }
          />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
