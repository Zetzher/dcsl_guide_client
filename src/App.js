import * as React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { Catalog } from './pages/index';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
    </Routes>
  );
}
export default App;