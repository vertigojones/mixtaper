import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Card, Image, Grid, List, Divider, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EditMixtapeForm from "./EditMixtapeForm";
import ConfirmDelete from "../ConfirmDelete";

class SingleMixtape extends Component {
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
    const res = await axios.get(`/api/mixtapes/${mixtapeId}`);
    this.setState({
      mixtape: res.data,
      songs: res.data
    });
    console.log(res.data);
  };

  toggleDelete = () => {
    this.setState({ confirmDelete: !this.state.confirmDelete });
    this.setState({ editForm: false });
  };

  toggleEdit = () => {
    this.setState({ editForm: !this.state.editForm });
    this.setState({ confirmDelete: false });
  };

  deleteMixtape = async () => {
    const mixtapeId = this.props.match.params.id;
    await axios.delete(`/api/mixtapes/${mixtapeId}`);
    console.log(this.props.match.params.id);
    this.props.history.push("/");
  };

  render() {
    return (
      <PageWrapper>
        <MixtapeWrapper>
          <ImageWrapper>
            <Background>
              <BackgroundText>
                <h1>{this.state.mixtape.title}</h1>
              </BackgroundText>
            </Background>
          </ImageWrapper>
          <h2>Created by {this.state.mixtape.created_by}</h2>
          <h2>Created for {this.state.mixtape.created_for}</h2>
          <h2>Dedication: {this.state.mixtape.dedication}</h2>
        </MixtapeWrapper>
      </PageWrapper>
    );
  }
}

export default SingleMixtape;

const PageWrapper = styled.div`
  text-align: center;

  h1 {
    font-family: "Permanent Marker", cursive;
    font-size: 32px;
  }

  h2 {
    font-family: "Permanent Marker", cursive;
    font-size: 21px;
  }
`;

const Background = styled.div`
  background: url("http://audiotranscriptpro.com/img/tape.gif");
  height: 42vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
`;
const BackgroundText = styled.div`
  margin: 75px auto;
`;

const MixtapeWrapper = styled.div`
  align-items: center;
`;

const ImageWrapper = styled.div`
  /* margin: 20px; */
`;
