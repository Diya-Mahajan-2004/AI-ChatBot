import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import mainPage from "./mainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<mainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
