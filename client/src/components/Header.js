import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
    render() {
        return (
            <HeaderStyles>
                <h1>Mixtaper</h1>
            </HeaderStyles>
        );
    }
}

export default Header;

const HeaderStyles = styled.div`
  width: 100%;
  padding: 20px;
  background: #ff3399;
  text-align: center;

  h1 {
    font-family: 'Bungee Shade', cursive;
    font-size: 52px;
    text-shadow: 1px 1px black;
    text-decoration: none;
    color: #66ff33;
  }
`;