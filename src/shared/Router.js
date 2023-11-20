import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";

const Router = ({ fanLetters, setFanLetters }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home fanLetters={fanLetters} setFanLetters={setFanLetters} />
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Detail fanLetters={fanLetters} setFanLetters={setFanLetters} />
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
