import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
   *,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    // 10px div by def of 16px
    font-size: 62.5%;
    
}
body{
  margin:0px;
  box-sizing:border-box;
}
  `;

function App() {
  return (
   <>
      <Globalstyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </>
   
  );
}

export default App;
