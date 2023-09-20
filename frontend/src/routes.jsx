import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import CreateAccount from "./components/CreateAccount";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/create-account" component={CreateAccount} />
      </div>
    </Router>
  );
};

export default App;