import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import { StateContext } from "./context/StateContext";
import toast, { Toaster } from "react-hot-toast";
import Test from "./pages/Test";
import Bill from "./pages/Bill";
import Products from "./pages/Products";

function App() {
  const id = useParams();
  return (
    <div>
      <BrowserRouter>
        <StateContext>
          <Navbar />
          <Toaster />

          <Routes>
            <Route exact path="" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/bill" element={<Bill />} />
            <Route path="test" element={<Test />} />
            <Route path="products" element={<Products />} />
            {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
          </Routes>
        </StateContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
