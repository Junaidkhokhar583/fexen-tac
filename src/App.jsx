import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin";
import { Header } from "./components/Header";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
