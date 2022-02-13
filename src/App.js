import React, { useState } from "react";
import Home from "./pages";
import Login from "./pages/Login";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  max-width: 100%;
  /* border: 1px solid grey; */
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
}
a {
  text-decoration: none;
}
`;

const theme = {
  light: "#EFE6EF",
  lightMed: "#E9D6EA",
  lightLogo: "#FFDED9",
  contrast: "#db3ffb",
  brown: "#61252D",
  melon: "#FE9A8D",
  zombie: "#E2D996",
  ink: "#4D097B",
};

function App() {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routes>
          <Route exact path="/"></Route>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
