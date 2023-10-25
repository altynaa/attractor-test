import React from 'react';
import {Container, CssBaseline} from "@mui/material";
import AppToolBar from "./components/UI/AppToolBar";
import {Route, Routes} from "react-router-dom";
import Login from "./features/users/Login";

function App() {
  return (
      <>
          <CssBaseline/>
          <header>
              <AppToolBar/>
          </header>
          <main>
              <Container maxWidth="xl">
                  <Routes>
                      <Route path="/" element={<Login/>}/>
                      <Route path="*" element={<h2>Page not found</h2>}/>
                  </Routes>
              </Container>
          </main>
      </>
  );
}

export default App;
