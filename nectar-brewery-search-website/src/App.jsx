import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Custom page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchResults from "./pages/SearchResults";
import Brewery from "./pages/Brewery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/search/:criteria" component={SearchResults} />
          <Route path="/autosearch/:criteria" component={Brewery} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
