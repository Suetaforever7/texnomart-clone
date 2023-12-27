import Header from "../src/components/Header/Desktop/Header"
import Caterogy from "../src/components/Caterogy/Caterogy"
import "./App.css"
import Home from "./pages/Home"
import DetailPage from "./pages/DetailPage"
import { Routes , Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Header />
      <Caterogy />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="product/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;