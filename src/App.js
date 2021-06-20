import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import AppNavbar from "./components/AppNavbar";
import UserDashboard from "./screens/UserDashboard";
import DeliveryDetails from "./screens/DeliveryDetails";
import OrderHistory from "./screens/OrderHistory";

// import {loadUser} from './actions/authActions'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <AppNavbar />
        </header>
        <main>
          <div className="">
            <div className="row">
              <div className="col-md-12">
                <Switch>
                  <Route exact path="/">
                    <HomeScreen />
                  </Route>
                  <Route path='/dashboard'>
                    <UserDashboard/>
                  </Route>
                </Switch>
                <Route path='/shipping'>
                  <DeliveryDetails/>
                </Route>
                <Route path='/history'>
                  <OrderHistory/>
                </Route>
              </div>
            </div>
          </div>
        </main>
        <footer>
        <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
