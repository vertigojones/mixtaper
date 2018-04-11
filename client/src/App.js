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
            <Route exact path="/mixtapes/:id" component={SingleMixtape} />
          </Body>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

const Body = styled.div`
  /* height: 100%; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("https://i.imgur.com/u1bGOfU.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
`;

const LinkWrapper = styled.div`
  font-family: 'Faster One', cursive;
  text-align: center;
  font-size: 28px;
  padding: 10px;
  border-style: solid;
  border-color: #ff3399;
`;
