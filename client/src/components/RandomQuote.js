import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class RandomQuote extends Component {
  state = {
    chuck: []
  };

  componentDidMount() {
    axios.get("http://api.icndb.com/jokes/random").then(res => {
      console.log("RESPONSE DATA", res.data);
      this.setState({
        chuck: res.data
      });
    });
  }

  render() {
    if (this.state.chuck.length == 0) {
      return <div />;
    }
    return (
      <QuoteWrapper>
        <h3>"{this.state.chuck.value.joke}"</h3>
      </QuoteWrapper>
    );
  }
}

export default RandomQuote;

const QuoteWrapper = styled.div`
  margin: 30px;

  h3 {
    font-family: "Permanent Marker", cursive;
    font-size: 21px;
    color: #ff3399;
    text-shadow: 1px 1px #66ff33;
  }
`;
