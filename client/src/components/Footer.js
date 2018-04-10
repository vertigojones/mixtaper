import React, { Component } from 'react';
import styled from "styled-components";

class Footer extends Component {
    render() {
        return (
            <div>
                <FooterStyles>
                    <h4>©2018 by Owen Liversidge @ General Assembly</h4>
                </FooterStyles>              
            </div>
        );
    }
}

const FooterStyles = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #ff3399;
  color: #66ff33;
  text-align: center;
  margin-top: 20px;

  h4 {
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
    text-shadow: 1px 1px black;
  }
`;

export default Footer;