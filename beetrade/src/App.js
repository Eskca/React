import React from "react";
import Home from "./views/Home";
import Dashboard from "./views/dashboard/Dashboard";
import Staking from "./views/dashboard/Staking";
import Swap from "./views/dashboard/Swap";
import Wallet from "./views/dashboard/Wallet";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </Router>
  );
}
 
export default App;