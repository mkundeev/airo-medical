import React from "react";
import { Route, Routes } from "react-router-dom";
import BeerListPage from "../pages/BeerListPage";
import BeerPage from "../pages/BeerPage";
import CommonLayOut from "../components/CommonLayOut/CommonLayOut";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayOut />}>
        <Route index element={<BeerListPage />} />
        <Route path="/beer/:id" element={<BeerPage />} />
      </Route>
    </Routes>
  );
}

export default App;
