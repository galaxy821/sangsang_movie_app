import React from "react";
import Home from "./router/Home";
import About from "./router/About";
import Detail from "./router/Detail";
import Header from "./component/Header";
import {HashRouter, Route} from 'react-router-dom';
import "./style/App.css";

function App(){
  return (
    <HashRouter>
      <Header/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail}/>
    </HashRouter>);
}

export default App;
