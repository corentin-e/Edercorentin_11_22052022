import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import React from "react";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
