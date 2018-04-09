import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MixtapeList from "./components/mixtapes/MixtapeList";
import Mixtape from "./components/mixtapes/Mixtape";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <h1>Mixtaper</h1>
            <div>
              <div>
                <Link to="/">All Mixtapes</Link>
              </div>
            </div>
          </div>

          <Route exact path="/" component={MixtapeList} />
          <Route path="/mixtapes/:id" component={Mixtape} />
        </div>
      </Router>
    );
  }
}

export default App;
