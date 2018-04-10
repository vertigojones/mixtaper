import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Card, Image, Grid, List, Divider, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EditMixtapeForm from "./EditMixtapeForm";

class Mixtape extends Component {
  state = {
    mixtape: {},
    songs: [],
    showEditMixtape: false
  };

  componentDidMount() {
    this.getSingleMixtape();
  }

  getSingleMixtape = async () => {
    const mixtapeId = this.props.match.params.id;
    const res = await axios.get(`api/mixtapes/${mixtapeId}`);
    this.setState({
      mixtape: res.data.mixtape,
      songs: res.data.songs
    });
    console.log(res.data);
  };

  render() {
    return (
      <PageWrapper>
        <MixtapeWrapper>
          <ImageWrapper>
            <img
              src="https://i.imgur.com/iOljN8M.png"
              alt={this.state.mixtape.title}
            />
            <TitleWrapper>
              <h1>{this.state.mixtape.title}</h1>
            </TitleWrapper>
          </ImageWrapper>
        </MixtapeWrapper>
      </PageWrapper>
    );
  }
}

export default Mixtape;

const PageWrapper = styled.div`
  img {
    width: 70%;
    display: block;
    margin: 0 auto;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 8px 16px 0 #ffff4d, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const MixtapeWrapper = styled.div`
  align-items: center;
`;

const ImageWrapper = styled.div`
  margin: 20px;
  width: 100%;
  position: relative;
`;

const TitleWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: black
  padding-left: 20px;
  padding-right: 20px;
`;
