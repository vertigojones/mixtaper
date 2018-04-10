import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { injectGlobal } from "styled-components";
import styled from "styled-components";
import MixtapeList from "./components/mixtapes/MixtapeList";
import SingleMixtape from "./components/mixtapes/SingleMixtape";
import Header from "./components/Header";
import Footer from "./components/Footer";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Bungee+Shade|Faster+One|Fontdiner+Swanky');
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

button {
  margin: 10px;
}
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
          <Body>
            <Route exact path="/" component={MixtapeList} />
            <Route path="/mixtapes/:id" component={SingleMixtape} />
          </Body>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

const Body = styled.div`
  height: 100vh;
`;

const LinkWrapper = styled.div`
  font-family: "Permanent Marker", cursive;
  text-align: center;
  font-size: 24px;
  padding: 10px;
  border-style: solid;
  border-color: #ff3399;
`;
