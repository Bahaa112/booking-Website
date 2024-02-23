import './App.css';
import Home from "./home.js";
import Verify from "./verify.js";
import Booking from "./booking.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Grid } from '@material-ui/core';
import Header from './header.js';

export default function App() {
  return (





          <Router>
            <Grid container direction="column">
        <Grid item>
          <Header></Header>
        </Grid>


        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Verify">
            <Verify />
          </Route>
           <Route path="/Booking">
            <Booking />
          </Route> 
        </Switch>
        </Grid>
        </Router>
      

  );
}


