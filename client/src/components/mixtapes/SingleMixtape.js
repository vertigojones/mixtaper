import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Card, Image, Grid, List, Divider, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EditMixtapeForm from "./EditMixtapeForm";

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

  toggleEdit = () => {
    this.setState({ showEditMixtape: !this.state.showEditMixtape });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const mixtapeId = this.state.mixtape.id;
    const mixtapeUpdate = { ...this.state.mixtape };
    await axios.patch(`/api/mixtapes/${mixtapeId}`, mixtapeUpdate);
    this.toggleEdit();
    await this.getSingleMixtape();
  };

  handleChange = event => {
    const mixtape = event.target.name;
    const newMixtape = { ...this.state.mixtape };
    newMixtape[mixtape] = event.target.value;
    this.setState({ mixtape: newMixtape });
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
          <Background>
            <BackgroundText>
              <h1>{this.state.mixtape.title}</h1>
            </BackgroundText>
          </Background>
          <h2>Created by {this.state.mixtape.created_by}</h2>
          <h2>Created for {this.state.mixtape.created_for}</h2>
          <h2>Dedication: {this.state.mixtape.dedication}</h2>
        </MixtapeWrapper>
        <ButtonWrapper>
          <Button negative onClick={this.deleteMixtape}>
            Delete {this.state.mixtape.title}
          </Button>
          <Button primary onClick={this.toggleEdit}>
            Edit {this.state.mixtape.title}
          </Button>
        </ButtonWrapper>
        {this.state.showEditMixtape ? (
          <EditMixtapeForm
            toggleEdit={this.toggleEdit}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            mixtape={this.state.mixtape}
          />
        ) : null}
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

const ButtonWrapper = styled.div`
  margin: 30px 0px;
`;
