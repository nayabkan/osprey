import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuoteProvider } from "./context/QuoteContext";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Inventory from "./pages/Inventory";
import Quote from "./pages/Quote";
import Bolts from "./pages/Bolts";  
import ProductDetails from "./pages/ProductDetails";
import NutDetails from "./pages/NutDetails";
import Studs from "./pages/Studs";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import ScrewDetails from "./pages/ScrewDetails";

function App() {
  return (
    <BrowserRouter>
      <QuoteProvider>

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* PRODUCTS */}
          <Route
            path="/products"
            element={<Products />}
          />

          {/* INVENTORY */}
          <Route
            path="/inventory"
            element={<Inventory />}
          />

          {/* PRODUCT DETAILS */}
          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          {/* NUTS */}
          <Route
            path="/nuts"
            element={<NutDetails />}
          />

          {/* STUDS */}
          <Route
            path="/studs"
            element={<Studs />}
          />
          <Route path="/bolts" element={<Bolts />} />

          {/* SCREWS */}
          <Route
            path="/screws"
            element={<ScrewDetails />}
          />

          {/* QUOTE */}
          <Route
            path="/quote"
            element={<Quote />}
          />

          {/* CERTIFICATIONS */}
          <Route
            path="/certifications"
            element={<Certifications />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* FALLBACK */}
          <Route
            path="*"
            element={<Home />}
          />

        </Routes>

      </QuoteProvider>
    </BrowserRouter>
  );
}

export default App;