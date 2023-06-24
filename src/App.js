import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContend from "./components/CartContend/CartContend";
import DataProvider from "./components/Context/DataContext";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartContend />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
