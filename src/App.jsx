import Router from "shared/Router";
import GlobalStyle from "GlobalStyle";
import { useState } from "react";
import fakeData from "./shared/fakeData.json";
import { Context } from "./Context";

function App() {
  const [fanLetters, setFanLetters] = useState(fakeData);

  return (
    <>
      <Context.Provider value={{ fanLetters, setFanLetters }}>
        <GlobalStyle />
        <Router />;
      </Context.Provider>
    </>
  );
}

export default App;
