import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import AppFooter from "./Components/AppFooter";
import Store from "./Pages/Store";
import ItemPage from "./Pages/ItemPage";
import CategoryPage from "./Pages/CategoryPage";
import PaymentPage from "./Pages/PaymentPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/Payment/:id" element={<PaymentPage />} />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
