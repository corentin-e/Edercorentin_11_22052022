import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import React from "react";

const Test = () => (
  <Link to="/">
    <span>Home</span>
  </Link>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
