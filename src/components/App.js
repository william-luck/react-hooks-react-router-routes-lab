import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

// Same as before. We list each individual component to be rendered
// Except we are using switch componenets, which uses conditional rendering depending on the URL on the page, with additional route components specifying what is displayed depending on the URL.
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/movies'>
          <Movies />
        </Route>
        <Route exact path='/directors'>
          <Directors />
        </Route>
        <Route exact path='/actors'>
          <Actors />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
  
}

export default App;
