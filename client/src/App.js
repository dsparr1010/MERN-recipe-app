import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from './pages/Search';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path ='/' component={Search}></Route>
      </div>
    </Router>
    );
}

export default App;
