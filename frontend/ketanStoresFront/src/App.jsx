/** @format */

import React from "react";
import LoginFinal from "./pages/Login";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import KetanStores from "./pages/Page-Filters/KetanStores";
import Men from "./pages/Page-Filters/Men";
import Kurta from "./pages/Page-Filters/kurta";
import Chudidar from "./pages/Page-Filters/chudidar";
import Silk from "./pages/Page-Filters/silk";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cotton from "./pages/Page-Filters/cotton";
import AddItems from "./AddItems";


const App = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider>
          <Routes>
            <Route path='/' element={ <LoginFinal /> } />
          </Routes>
        <Navbar />
          <Routes>
            <Route path='/ketan-stores/' element={<KetanStores/>} />
            <Route path='/ketan-stores/men/' element={<Men />} />
            <Route path="/ketan-stores/men/kurta/" element={<Kurta/>} />
            <Route path="/ketan-stores/men/chudidar/" element={<Chudidar/>} />
            <Route path="/ketan-stores/men/kurta/silk/" element={<Silk/>} />
            <Route path="/ketan-stores/men/kurta/cotton/" element={ <Cotton /> } />
            <Route path='/add-items' element={<AddItems/>} />
          </Routes>
        <Footer />
        </CssVarsProvider>
      </StyledEngineProvider>
    </>
  );
};

export default App;
