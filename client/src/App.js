import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { injectGlobal } from "styled-components";
import styled from "styled-components";
import MixtapeList from "./components/mixtapes/MixtapeList";
import Mixtape from "./components/mixtapes/Mixtape";
import Header from "./components/Header";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Bungee+Shade|Faster+One|Fontdiner+Swanky');
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <LinkWrapper>
            <Link to="/">All Mixtapes</Link>
          </LinkWrapper>
          <Route exact path="/" component={MixtapeList} />
          <Route path="/mixtapes/:id" component={Mixtape} />
        </div>
      </Router>
    );
  }
}

export default App;

const LinkWrapper = styled.div`
  font-family: "Fontdiner Swanky", cursive;
  text-align: center;
  font-size: 18px;
  padding: 10px;
  border-style: solid;
  border-color: #ff3399;
`;
