import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Table, Button } from "semantic-ui-react";
import NewSongForm from "./NewSongForm";
import DeleteSong from "./DeleteSong";

class SongList extends Component {
  state = {
    songs: [],
    newSong: {
      track: 0,
      artist: "",
      title: ""
    },
    toggleEditForm: false,
    comments: []
  };

  createSong = async event => {
    event.preventDefault();
    const response = await axios.post(
      `/api/mixtapes/${this.props.mixtapeId}/songs`,
      this.state.newSong
    );
    this.setState({
      newSong: {
        track: 0,
        artist: "",
        title: ""
      }
    });
    this.props.getSingleMixtape();
  };

  handleChange = event => {
    const newSong = { ...this.state.newSong };
    newSong[event.target.name] = event.target.value;
    this.setState({ newSong });
    console.log(this.state.newSong);
  };

  toggleSongForm = () => {
    this.setState({ showNewSongForm: !this.state.showNewSongForm });
  };

  render() {
    return (
      <SongListWrapper>
        <TableWrapper>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Track:</Table.HeaderCell>
                <Table.HeaderCell>Artist:</Table.HeaderCell>
                <Table.HeaderCell>Song:</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.songs.sort((a, b) => a.track - b.track).map(song => {
                return (
                  <Table.Row key={song.id}>
                    <Table.Cell>{song.track}</Table.Cell>
                    <Table.Cell>{song.artist}</Table.Cell>
                    <Table.Cell>{song.title}</Table.Cell>
                    <Table.Cell>
                      <DeleteSong
                        song={song.id}
                        mixtapeId={this.props.mixtapeId}
                        getSingleMixtape={this.props.getSingleMixtape}
                      />
                    </Table.Cell>
                  </Table.Row>
                );
                console.log(song);
              })}
            </Table.Body>
            {this.state.err}
          </Table>
        </TableWrapper>
        <ButtonWrapper>
          <Button primary onClick={this.toggleSongForm}>
            Add Song
          </Button>
        </ButtonWrapper>
        {this.state.showNewSongForm ? (
          <NewSongForm
            handleChange={this.handleChange}
            createSong={this.createSong}
            newSong={this.state.newSong}
          />
        ) : null}
      </SongListWrapper>
    );
  }
}

export default SongList;

const SongListWrapper = styled.div``;

const TableWrapper = styled.div`
  width: 80%;
  display: block;
  margin: 0 auto;
  padding: 30px;
  font-family: "Permanent Marker", cursive;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  margin: 30px 0px;
`;
