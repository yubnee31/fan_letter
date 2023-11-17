import Router from "shared/Router";
import GlobalStyle from "GlobalStyle";
import { useState } from "react";
import fakeData from "./shared/fakeData.json";

function App() {
  const [fanLetters, setFanLetters] = useState(fakeData);

  return (
    <>
      <GlobalStyle />
      <Router fanLetters={fanLetters} setFanLetters={setFanLetters} />;
    </>
  );
}

export default App;
