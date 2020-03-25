import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from './pages/Search';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Navbar';

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Header />
          <Route exact path ='/' component={Search}></Route>
          <Route exact path ='/signup' component={Signup}></Route>
          <Route exact path ='/login' component={Login}></Route>
      </div>
    </Router>
    );
}

export default App;
