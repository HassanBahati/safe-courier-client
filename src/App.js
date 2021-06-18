import React from "react";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="container">
         <Navbar/>
        </header>
        <main>
          <div className="">
            <div className="row">
              <div className="col-md-12">
                <Switch>
                  <Route exact path="/">
                    <HomeScreen />
                  </Route>
                  <Route path='/log-in'>
                    <Login/>
                  </Route>
                  <Route to='/register'>
                    <Register/>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </main>

             </div>

    </Router>
  );
}

export default App;
