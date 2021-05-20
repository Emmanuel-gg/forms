import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Formulario1 from './components/Formulario1';
import Formulario2 from './components/Formulario2';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  return (

    <div className="App azul-claro azul-oscuro-md" style={{minHeigth:"100vh",display: "flex",flexDirection: "column"}}>
      <Router>
        <Header/>

        <Switch>

          <Route path="/formulario-1">
              <Formulario1/>
          </Route>
          <Route path="/formulario2">
              <Formulario2/>
          </Route>
          <Route path="/">
              <Formulario1/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
