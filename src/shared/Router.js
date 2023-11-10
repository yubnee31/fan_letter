import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Jisoo from "pages/Jisoo";
import Jennie from "pages/Jennie";
import Rose from "pages/Rose";
import Lisa from "pages/Lisa";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jisoo" element={<Jisoo />} />
        <Route path="jennie" element={<Jennie />} />
        <Route path="rose" element={<Rose />} />
        <Route path="lisa" element={<Lisa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
