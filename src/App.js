import * as React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { Catalog, ProductInfo } from './pages/index';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/product-info" element={<ProductInfo />} />
    </Routes>
  );
}
export default App;