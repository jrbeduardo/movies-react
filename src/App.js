import React from 'react';
import styles  from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';

export const App = () => {
  return (
    <Router> 
       <header>
            <Link to="/">
            <h1 className={styles.title}>🍿🍿 Movies 🍿🍿</h1>
            </Link>
            
        </header>
        <main>
          <Switch>
            <Route exact path="/movies/:id">
              <MovieDetails/>
            </Route>
            <Route  exact path="/">
              <LandingPage/>
            </Route>
            <Route path="*">
              404
            </Route>
          </Switch>
        </main>
    </Router>  
  )
}
