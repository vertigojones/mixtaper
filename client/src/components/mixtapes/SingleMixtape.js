import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import EditMixtapeForm from "./EditMixtapeForm";
import SongList from "../songs/SongList";

class SingleMixtape extends Component {
  state = {
    mixtape: {},
    songs: [],
    showEditMixtape: false,
    showCreateSongForm: false
  };

  componentDidMount() {
    this.getSingleMixtape();
  }

  getSingleMixtape = async () => {
    const mixtapeId = this.props.match.params.id;
    const res = await axios.get(`/api/mixtapes/${mixtapeId}`);
    this.setState({
      mixtape: res.data.mixtape,
      songs: res.data.songs
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
        <h1>Now Playing:</h1>
        <MixtapeWrapper>
          <Background>
            <BackgroundText>
              <h2>{this.state.mixtape.title}</h2>
            </BackgroundText>
          </Background>
          <h3>Created by {this.state.mixtape.created_by}</h3>
          <h3>Created for {this.state.mixtape.created_for}</h3>
          <h3>Dedication: {this.state.mixtape.dedication}</h3>
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
        <SonglistWrapper>
          <SongList
            mixtapeId={this.state.mixtape.id}
            getSingleMixtape={this.getSingleMixtape}
            songs={this.state.songs}
          />
        </SonglistWrapper>
        <PlayerWrapper>
          <iframe
            src={`https://open.spotify.com/embed?uri=${
              this.state.mixtape.player_url
            }&theme=white`}
            width="65%"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </PlayerWrapper>
      </PageWrapper>
    );
  }
}

export default SingleMixtape;

const PageWrapper = styled.div`
  text-align: center;

  h1 {
    font-family: "Press Start 2P", cursive;
    padding: 40px;
    color: red;
    text-shadow: 1px 1px black;
  }

  h2 {
    font-family: "Permanent Marker", cursive;
    font-size: 32px;
  }

  h3 {
    font-family: "Permanent Marker", cursive;
    font-size: 21px;
    color: navy;
    text-shadow: 1px 1px #66ff33;
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

const PlayerWrapper = styled.div`
  margin: 30px 0px;
`;

const SonglistWrapper = styled.div``;
