import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./components/home";
import App from "./App";

function reference(){
    return(
        <div>
        <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
    <App />
        </div>
    )
}

export default reference;