import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPswd";


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

      
        <Route path="*" element={<LoginPage />} />

      </Routes>
    </Router>
  );
}

export default App;
